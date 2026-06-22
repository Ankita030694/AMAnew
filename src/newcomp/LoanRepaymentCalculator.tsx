"use client";

import React, { useState, useMemo } from 'react';

export default function LoanRepaymentCalculator() {
  const [principal, setPrincipal] = useState<number>(100000);
  const [rate, setRate] = useState<number>(12);
  const [tenure, setTenure] = useState<number>(12);

  const schedule = useMemo(() => {
    if (!principal || !rate || !tenure || tenure <= 0) return null;
    const monthlyRate = rate / 12 / 100;
    
    // Handle 0% interest edge case
    let emi = 0;
    if (monthlyRate === 0) {
      emi = principal / tenure;
    } else {
      emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
        (Math.pow(1 + monthlyRate, tenure) - 1);
    }

    let balance = principal;
    const table = [];

    for (let month = 1; month <= tenure; month++) {
      const interest = balance * monthlyRate;
      const principalPart = emi - interest;
      balance -= principalPart;

      table.push({
        month,
        emi: emi,
        principalPart: principalPart,
        interest: interest,
        balance: Math.max(0, balance)
      });
    }

    return { emi, table, totalInterest: (emi * tenure) - principal, totalPayment: emi * tenure };
  }, [principal, rate, tenure]);

  // Handle format numbers
  const formatCurrency = (val: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden my-12 border border-gray-100" id="loan-repayment-calculator-tool">
      <div className="bg-[#1a202c] p-6 md:p-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-[#D2A02A]">Loan Repayment Calculator</h3>
        <p className="text-gray-300 mt-2 text-sm md:text-base">Plan your finances accurately by calculating your exact monthly outflow.</p>
      </div>

      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Loan Amount (₹)</label>
            <input
              type="number"
              value={principal || ''}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent text-gray-900 font-medium"
              min="0"
              placeholder="e.g. 100000"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Interest Rate (% P.A.)</label>
            <input
              type="number"
              value={rate || ''}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent text-gray-900 font-medium"
              step="0.1"
              min="0"
              placeholder="e.g. 12"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Loan Tenure (Months)</label>
            <input
              type="number"
              value={tenure || ''}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent text-gray-900 font-medium"
              min="1"
              placeholder="e.g. 12"
            />
          </div>
        </div>

        {schedule && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
                <p className="text-sm text-gray-500 mb-1 font-medium">Monthly EMI</p>
                <p className="text-3xl font-bold text-[#1a202c]">{formatCurrency(schedule.emi)}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
                <p className="text-sm text-gray-500 mb-1 font-medium">Total Interest</p>
                <p className="text-3xl font-bold text-[#D2A02A]">{formatCurrency(schedule.totalInterest)}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
                <p className="text-sm text-gray-500 mb-1 font-medium">Total Payment</p>
                <p className="text-3xl font-bold text-[#1a202c]">{formatCurrency(schedule.totalPayment)}</p>
              </div>
            </div>

            <h4 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Amortization Schedule</h4>
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full text-left border-collapse whitespace-nowrap min-w-[600px]">
                <thead>
                  <tr className="bg-[#1a202c] text-white">
                    <th className="p-4 font-semibold text-sm">Month</th>
                    <th className="p-4 font-semibold text-sm">EMI</th>
                    <th className="p-4 font-semibold text-sm">Principal Component</th>
                    <th className="p-4 font-semibold text-sm">Interest Component</th>
                    <th className="p-4 font-semibold text-sm">Remaining Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.table.map((row) => (
                    <tr key={row.month} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-gray-800 font-bold">{row.month}</td>
                      <td className="p-4 text-gray-700 font-medium">{formatCurrency(row.emi)}</td>
                      <td className="p-4 text-green-700 font-medium">+{formatCurrency(row.principalPart)}</td>
                      <td className="p-4 text-red-600 font-medium">-{formatCurrency(row.interest)}</td>
                      <td className="p-4 text-gray-900 font-bold">{formatCurrency(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h5 className="text-lg font-bold text-amber-900 mb-2">Need Help Managing High EMIs?</h5>
              <p className="text-amber-800 mb-4">If your calculated EMIs are unaffordable and you are facing financial hardship, our legal experts can help you negotiate a loan settlement.</p>
              <a href="/contact" className="inline-block bg-[#D2A02A] text-white font-bold py-3 px-6 rounded-md hover:bg-yellow-600 transition-colors">
                Consult a Legal Expert Today
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

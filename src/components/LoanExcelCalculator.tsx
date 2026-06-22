"use client";

import React, { useState } from 'react';

export default function LoanExcelCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [interestRate, setInterestRate] = useState<number>(12);
  const [tenureMonths, setTenureMonths] = useState<number>(60);
  const [schedule, setSchedule] = useState<any[]>([]);

  const formatInr = (num: string | number) => {
    const val = typeof num === 'string' ? parseFloat(num) : num;
    return new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(val);
  };

  const calculateSchedule = () => {
    if (!loanAmount || !interestRate || !tenureMonths) return;

    const monthlyRate = interestRate / 12 / 100;
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1);

    let balance = loanAmount;
    const newSchedule = [];

    for (let month = 1; month <= tenureMonths; month++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = emi - interestPayment;
      
      // Handle floating point precision issues on the last month
      const actualPrincipalPayment = month === tenureMonths ? balance : principalPayment;
      const actualEmi = actualPrincipalPayment + interestPayment;

      newSchedule.push({
        month,
        openingBalance: balance.toFixed(2),
        emi: actualEmi.toFixed(2),
        principal: actualPrincipalPayment.toFixed(2),
        interest: interestPayment.toFixed(2),
        closingBalance: (balance - actualPrincipalPayment).toFixed(2),
      });

      balance -= actualPrincipalPayment;
    }

    setSchedule(newSchedule);
  };

  const downloadExcel = () => {
    if (schedule.length === 0) {
      alert("Please calculate the schedule first.");
      return;
    }

    const headers = ["Month", "Opening Balance (Rs)", "EMI (Rs)", "Principal Component (Rs)", "Interest Component (Rs)", "Closing Balance (Rs)"];
    
    // Create CSV content
    let csvContent = "data:text/csv;charset=utf-8,";
    
    // Add loan details summary at the top
    csvContent += "LOAN REPAYMENT SCHEDULE FOR OTS NEGOTIATION\n\n";
    csvContent += `Loan Amount (Principal):,Rs. ${loanAmount}\n`;
    csvContent += `Annual Interest Rate:,${interestRate}%\n`;
    csvContent += `Tenure (Months):,${tenureMonths}\n\n`;

    // Add table headers
    csvContent += headers.join(",") + "\n";

    // Add table rows
    schedule.forEach(row => {
      const rowData = [
        row.month,
        row.openingBalance,
        row.emi,
        row.principal,
        row.interest,
        row.closingBalance
      ];
      csvContent += rowData.join(",") + "\n";
    });

    // Create a download link
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Loan_Repayment_Schedule_OTS.csv");
    document.body.appendChild(link); // Required for FF
    
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white border-2 border-[#D2A02A] rounded-2xl shadow-xl overflow-hidden my-8" id="calculator">
      <div className="bg-[#1a202c] p-6">
        <h3 className="text-xl md:text-2xl font-bold text-white text-center">
          Loan Repayment Schedule & Excel Generator
        </h3>
        <p className="text-gray-300 text-center text-sm mt-2">
          Calculate your pure principal amortization and download it instantly in Excel (CSV) format to present to the bank.
        </p>
      </div>
      
      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-gray-700 font-bold mb-2 text-sm">
              Loan Amount (Rs.)
            </label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D2A02A] focus:outline-none"
              placeholder="e.g. 500000"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2 text-sm">
              Interest Rate (Annual %)
            </label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D2A02A] focus:outline-none"
              placeholder="e.g. 12"
              step="0.1"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2 text-sm">
              Loan Tenure (Months)
            </label>
            <input
              type="number"
              value={tenureMonths}
              onChange={(e) => setTenureMonths(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D2A02A] focus:outline-none"
              placeholder="e.g. 60"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={calculateSchedule}
            className="bg-[#1a202c] hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-colors flex-1 md:flex-none"
          >
            Calculate Schedule
          </button>
          
          <button
            onClick={downloadExcel}
            className={`font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center flex-1 md:flex-none ${
              schedule.length > 0 
                ? 'bg-[#D2A02A] hover:bg-[#b88a22] text-white' 
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
            disabled={schedule.length === 0}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Excel (.csv)
          </button>
        </div>

        {schedule.length > 0 && (
          <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 shadow-inner">
            <div className="max-h-[400px] overflow-y-auto">
              <table className="min-w-full bg-white relative">
                <thead className="bg-gray-50 sticky top-0 shadow-sm z-10">
                  <tr>
                    <th className="py-3 px-4 border-b text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Month</th>
                    <th className="py-3 px-4 border-b text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Opening Bal</th>
                    <th className="py-3 px-4 border-b text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">EMI</th>
                    <th className="py-3 px-4 border-b text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Principal</th>
                    <th className="py-3 px-4 border-b text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Interest</th>
                    <th className="py-3 px-4 border-b text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Closing Bal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {schedule.slice(0, 12).map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 text-sm text-gray-700 whitespace-nowrap">{row.month}</td>
                      <td className="py-3 px-4 text-sm text-gray-700 whitespace-nowrap text-right">₹ {formatInr(row.openingBalance)}</td>
                      <td className="py-3 px-4 text-sm text-gray-700 whitespace-nowrap text-right font-medium text-gray-900">₹ {formatInr(row.emi)}</td>
                      <td className="py-3 px-4 text-sm text-[#38a169] whitespace-nowrap text-right">₹ {formatInr(row.principal)}</td>
                      <td className="py-3 px-4 text-sm text-[#e53e3e] whitespace-nowrap text-right">₹ {formatInr(row.interest)}</td>
                      <td className="py-3 px-4 text-sm text-gray-700 whitespace-nowrap text-right font-semibold">₹ {formatInr(row.closingBalance)}</td>
                    </tr>
                  ))}
                  {schedule.length > 12 && (
                    <tr>
                      <td colSpan={6} className="py-4 text-center text-sm text-gray-500 italic bg-gray-50">
                        Showing first 12 months. Download the Excel file to view the full {tenureMonths}-month schedule.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import re
import os

# Define the text sections
lead_hook = "As of 2026, over 40% of middle-income borrowers in India have faced severe harassment from recovery agents after defaulting on an unsecured personal loan. Hiring a legitimate loan settlement company in India can legally halt these abusive calls within 48 hours and reduce your outstanding debt by up to 60%."

intro = """
In recent years, the retail credit market in India has witnessed an unprecedented expansion. The rise of digital lending platforms, instant personal loan applications, credit cards, and buy now pay later options has made credit highly accessible to middle-income families. While this has enabled financial flexibility, it has also led to a significant increase in debt defaults. A sudden change in financial circumstances, such as job loss, salary reductions, severe medical emergencies, or business failures, can quickly push an individual into a debt trap. Once a borrower defaults on an unsecured personal loan or credit card payment, the situation often escalates from financial difficulty to severe emotional distress due to the aggressive tactics of third-party recovery agents.

For borrowers who find themselves in an inescapable cycle of debt, loan settlement is a recognized and viable option to resolve their liabilities. While it is possible to negotiate a settlement directly with a lender, the process is highly complex, stressful, and intimidating. This is where a professional loan settlement company in India plays a crucial role. Acting as legal advocates and financial mediators, these specialized firms assist borrowers in navigating the complexities of debt resolution, halting illegal harassment, and negotiating a manageable repayment structure with financial institutions.

This comprehensive guide explores the structural role of a professional loan settlement company in India, the legal framework protecting borrowers from harassment, the step-by-step settlement process, the cost of hiring these services, and the critical red flags to watch for when choosing a partner.
"""

toc_1_1 = """
Why You Need a Professional Loan Settlement Company in India

Dealing with banks, non-banking financial companies (NBFCs), and digital lending platforms can be an overwhelming experience for an individual, especially when they are already under financial distress. Financial institutions have dedicated recovery departments, legal teams, and third-party recovery agencies whose sole objective is to recover the maximum amount possible. A lone borrower, often unaware of their legal rights and the banking policies, is at a severe disadvantage.

A professional loan settlement company in India bridges this power imbalance. By hiring professional negotiators, you gain access to legal expertise, industry knowledge, and established negotiation channels that are otherwise inaccessible to the average consumer. These companies understand the internal policies of different banks, the minimum thresholds for settlement, and the specific legal codes that govern debt collection.
"""

toc_1_2 = """
Protecting You from Recovery Agent Harassment

One of the most immediate and distressing consequences of defaulting on an unsecured loan is the onslaught of recovery agent calls and visits. While banks are legally permitted to pursue recovery of outstanding dues, they must do so within the bounds of the law. Unfortunately, many third-party recovery agents employ tactics that violate basic human rights and privacy laws.

These abusive tactics often include making hundreds of calls a day to the borrower and their family members, calling workplace supervisors to shame the borrower, creating WhatsApp groups with the borrower's contacts to label them a fraud, sending fake legal notices, and making unauthorized visits to the borrower's home or office. Such behavior is illegal under Indian law.

When you hire a legitimate loan settlement company, they establish an immediate legal buffer between you and the recovery agents. They will draft formal legal notices to your lenders, informing them that you have retained legal counsel for debt resolution and that all future communication must be directed to your appointed representatives. Under Indian consumer protection laws and recovery guidelines, lenders and their agents are required to halt direct contact with the borrower once a legal representative is appointed to handle the matter. This buffer can legally halt recovery agent harassment within 48 hours of engagement, giving you the mental peace required to assess your financial options.

Furthermore, a professional loan settlement agency knows how to file a formal [loan recovery agents harassment complaint](/loan-recovery-agents-harassment-complaint) with the appropriate authorities. They will document the abusive calls, record harassment incidents, and present them to the bank's grievance redressal officer, the police, or the Reserve Bank of India (RBI) Ombudsman.

The legal framework protecting borrowers from harassment is well established in India. In the landmark case of Manager, ICICI Bank Ltd. vs. Prakash Kaur and Others (2007), the Supreme Court of India strongly condemned the use of strong-arm tactics or musclemen by banks to recover loans. The Court ruled that banks must follow the procedure recognized by law and cannot use force or intimidation. Additionally, the RBI issued a detailed circular on August 12, 2022, titled "Outsourcing of Financial Services - Responsibilities of Regulated Entities regarding Recovery Agents," which strictly prohibits recovery agents from resorting to intimidation, physical or verbal harassment, public humiliation, or intrusion into the privacy of the debtor's family and friends. To fully understand your protections, you should familiarize yourself with [what are the rbi guidelines for recovery agents in india](/what-are-the-rbi-guidelines-for-recovery-agents-in-india) to ensure your rights are not violated.
"""

toc_1_3 = """
Negotiating the Lowest Settlement Percentage

When a borrower approaches a bank for a settlement directly, the bank's initial response is almost always to reject the request or demand a high payment. Lenders are businesses, and their priority is to minimize their losses. They will try to convince the borrower to pay the entire outstanding amount, including accumulated interest, penal charges, and late fees.

A professional loan settlement company, however, understands the math of debt settlement. They know that banks classify loans that have been unpaid for more than 90 days as Non-Performing Assets (NPAs). Once a loan becomes an NPA, banks are required by RBI regulations to make provisions for these bad loans on their balance sheets, which impacts their profitability. Consequently, banks are often willing to write off a portion of the debt to recover at least some principal value, rather than let the asset remain a total loss.

Professional negotiators analyze your financial profile to build a case of financial hardship. They gather proof of your income drop, medical expenses, or other liabilities to demonstrate to the bank's settlement committee that you genuinely cannot pay the full outstanding balance. They negotiate directly with senior recovery managers or the bank's settlement committee, rather than the lower level collection agents who have no authority to approve discounts.

Through strategic negotiation, a professional agency can reduce your outstanding debt by up to 60% of the total outstanding amount. They help you understand [what is a full and final loan settlement](/what-is-a-full-and-final-loan-settlement) and work to secure the absolute lowest settlement percentage, allowing you to close your debts with a lump-sum payment that fits your budget. They also ensure that penal interest and late fees, which often inflate the outstanding debt artificially, are waived during the negotiation process.
"""

toc_2_1 = """
The Step-by-Step Loan Settlement Process in India

The process of settling a loan is a structured legal and financial journey. It requires careful planning, documentation, and negotiation. A professional loan settlement company follows a systematic approach to ensure that the settlement is legally binding, financially viable, and permanent.
"""

toc_2_2 = """
Step 1: Initial Financial Assessment

The first step in the settlement process is a comprehensive evaluation of the borrower's financial health. The settlement consultants will sit down with you to review your total outstanding liabilities, including credit cards, personal loans, business loans, and secured debts. They will also analyze your current income sources, monthly essential expenditures, and any available assets.

This assessment serves multiple critical purposes. First, it determines whether you are a suitable candidate for loan settlement. Settlement is generally recommended only for borrowers facing genuine, long-term financial hardship. If the assessment shows that you have the capacity to pay your debts through restructuring or budgeting, the agency will advise against settlement, as it has a negative impact on your CIBIL score.

Second, the assessment helps establish your settlement budget. The consultants calculate how much money you can realistically accumulate for a lump-sum settlement or how much you can afford to pay in short-term installments. This budget forms the basis of all future negotiations with your lenders.

During this stage, the company will compile a comprehensive hardship file, including salary slips, bank statements, termination letters, medical certificates, or business audit reports, which will serve as evidence of your financial distress during negotiations.
"""

toc_2_3 = """
Step 2: Stopping Harassment Legally

Once the financial assessment is complete and you formally engage the settlement company, the immediate priority is to stop the harassment from recovery agents. The agency's legal team takes over all communication channels on your behalf.

They will issue formal legal notices to the lenders, stating that you have appointed them as your legal representatives to negotiate a resolution for your debts. The notice will request the bank to stop calling you or visiting your premises, and instead route all communications, settlement proposals, and legal correspondence through the agency.

If recovery agents continue to harass you after receiving this notice, the settlement company will assist you in gathering evidence of the violations. This includes call logs showing persistent calls outside the permitted hours (8:00 AM to 7:00 PM), recordings of abusive or threatening language, and witness statements of unauthorized visits. The agency will then file formal complaints with the bank's grievance cell, police authorities for harassment and criminal intimidation, and the RBI Ombudsman for violations of the Fair Practices Code. This aggressive legal defense protects your dignity and peace of mind while the settlement is being negotiated.
"""

toc_2_4 = """
Step 3: Negotiating with Lenders

With the harassment contained, the negotiation phase begins. This is a highly strategic process that can take anywhere from a few weeks to several months, depending on the lender and the complexity of the debt.

The loan settlement company will initiate contact with the appropriate settlement departments of your lenders. They do not deal with the regular collection callers; instead, they engage with the bank's recovery managers, asset reconstruction companies, or the bank's internal settlement committee.

The negotiators present your hardship file and propose a settlement. The initial offer is typically low, usually around 20% to 30% of the total outstanding amount. The bank will counter with a higher figure, and a series of negotiations will follow. The settlement company uses its market knowledge of what specific lenders are willing to accept to steer the negotiation toward a favorable outcome, aiming for a discount of 50% to 60% of the total outstanding debt.

The negotiation strategy also differs based on the type of lender. Traditional public sector banks often have rigid settlement schemes but are open to settlements if the borrower has no assets. Private banks and NBFCs are more flexible but require strong documentation of distress. Fintech apps are often aggressive with recovery tactics but may agree to fast settlements if they realize the debt is otherwise unrecoverable. The professional agency tailors its negotiation approach for each lender to achieve the best results.
"""

toc_2_5 = """
Step 4: Securing the Settlement Letter

The most critical step in the entire process is securing the settlement letter. A common trap that individual borrowers fall into is paying money to a recovery agent based on a verbal promise that the loan will be settled. Such verbal agreements have no legal validity, and the bank will often treat the payment as a regular partial payment, leaving the remaining balance outstanding.

A professional loan settlement company ensures that no payment is made until a formal, written settlement letter is issued by the bank on its official letterhead. The agency's legal team will carefully review this letter to verify its authenticity and terms.

The settlement letter must contain specific details, including:
1. The exact settlement amount agreed upon.
2. The payment schedule, including the dates by which the lump-sum or installments must be paid.
3. A clear statement that upon receipt of the agreed settlement amount, the loan account will be closed, and the bank will have no further claims against the borrower.
4. A clause indicating that the bank will report the account as "Settled" to the credit bureaus and issue a No Objection Certificate or No Dues Certificate.

Only after the settlement letter is verified will the agency advise you to make the payment directly to the bank's official account. Once the payment is completed, the agency will follow up with the bank to secure the final No Dues Certificate and ensure that the credit bureaus are updated accordingly.
"""

toc_3 = """
Cost Breakdown of Hiring a Settlement Agency

Hiring a professional loan settlement company involves costs, and it is essential to understand how these fees are structured to ensure you are getting a fair deal. Legitimate agencies are transparent about their fees and outline them in a written contract before starting any work.

There are three primary fee models used by loan settlement companies in India:

1. Performance-Based (Success) Fees
This is widely considered the most transparent structure. The agency's primary compensation is directly tied to the amount of money they save you. Success fees typically range between 10% and 20% of the total saved amount.

For example, if you have a credit card debt with a total outstanding balance of 4,00,000 INR and the company negotiates a settlement for 1,50,000 INR, the savings achieved are 2,50,000 INR. If the agreed success fee is 15%, the agency's fee will be 37,500 INR, payable only after the bank issues the official settlement letter. This model ensures that the agency is motivated to negotiate the deepest possible discount for you.

2. Retainer / Legal Consultation Fees
In addition to success fees, some agencies charge a flat retainer or consultation fee. This fee covers the cost of legal services, drafting and sending legal replies, handling recovery agent calls, and filing complaints. Retainer fees can range from 2,000 to 5,000 INR per month, or a flat fee of 5,000 to 10,000 INR per loan account. It pays for ongoing operational costs and legal buffer services.

3. Total Debt Percentage Model
Under this model, the agency charges a flat fee based on a percentage of your total outstanding debt at enrollment, typically ranging from 2% to 5%. For instance, if your total outstanding debt across multiple loans is 10,00,000 INR, the flat fee would be 3% of that amount, which is 30,000 INR, often paid in installments. While this model provides cost predictability, it may not align the agency's incentives with maximizing your savings as closely as the success fee model does.

Before signing a contract, ensure that all fee components are clearly documented, including the 18% GST applicable for professional services in India.
"""

toc_4 = """
Red Flags: How to Spot Fake Settlement Companies

As the demand for debt relief services has grown in India, so too has the number of fraudulent entities seeking to exploit vulnerable borrowers under financial stress. These fake companies make unrealistic promises, collect high upfront fees, and disappear, leaving the borrower in a worse financial position than before.

To protect yourself, you must be aware of the common red flags associated with fraudulent settlement companies:

Red Flag 1: Guarantees of Specific Waiver Percentages or Credit Bureau Fixes
Legitimate loan settlement companies will never guarantee a specific settlement discount or claim they can repair your credit score instantly. Settlement negotiation is subject to the bank's policies, the borrower's financial profile, and the discretion of the settlement committee. Furthermore, settling a loan always leaves a "Settled" remark on your credit report, which lowers your credit score and remains on the report for seven years. Any agency claiming they can delete this remark immediately is lying.

Red Flag 2: Demanding Large Upfront Success Fees
If a company demands that you pay their entire success fee or a massive upfront commission before they have initiated negotiations, walk away. Legitimate success fees are only paid after the settlement has been negotiated and the bank's official settlement letter is in hand. Upfront retainers for legal services are acceptable, but they should be reasonable and clearly explained.

Red Flag 3: Advising You to Intentionally Default
A reputable agency will only recommend settlement if you are in genuine financial distress and have already defaulted or are on the verge of defaulting due to insolvency. If a company advises you to stop paying your loans when you have the financial capacity to do so, simply to get a discount, they are engaging in unethical practices. Banks can detect intentional defaults, and doing so can lead to legal action for fraud under RBI regulations.

Red Flag 4: Asking for Payments to be Deposited into the Agency's Account
This is a critical warning sign. A legitimate loan settlement company will never ask you to pay the settlement amount into their corporate or personal bank account. All settlement payments must be made directly to the lender's official settlement account, using payment methods specified in the bank's official settlement letter. If an agency asks you to transfer funds to them, claiming they will pay the bank on your behalf, it is a scam.

Red Flag 5: Lack of Physical Office or Written Agreements
Fraudulent companies often operate solely through online channels, without a verifiable physical office address or corporate registration details on the Ministry of Corporate Affairs portal. Refuse to work with any agency that does not provide a comprehensive, signed service agreement detailing their terms of service, fee structure, refund policies, and dispute resolution mechanisms.
"""

conclusion = """
Conclusion

Navigating a debt default is one of the most challenging experiences a borrower can face, but it is important to remember that legal frameworks are in place to prevent harassment and provide a path forward. Engaging a professional, legitimate loan settlement company in India can offer the legal protection, negotiation leverage, and emotional relief needed to resolve outstanding liabilities. By understanding the step-by-step process, fee structures, and potential red flags, you can make informed decisions to regain your financial stability.
"""

parts = [
    lead_hook,
    intro,
    toc_1_1,
    toc_1_2,
    toc_1_3,
    toc_2_1,
    toc_2_2,
    toc_2_3,
    toc_2_4,
    toc_2_5,
    toc_3,
    toc_4,
    conclusion
]

full_text = "\n\n".join(parts)

# Clean em dashes and double hyphens
full_text = full_text.replace("—", " - ")
full_text = full_text.replace("--", " - ")
full_text = re.sub(r'-{2,}', '-', full_text)

# Let's count words using split().
words = full_text.split()
final_wc = len(words)
print("Final word count:", final_wc)

# Verify em-dash and double hyphen are gone
assert "—" not in full_text, "Found em dash!"
assert "--" not in full_text, "Found double hyphen!"
assert 2500 <= final_wc <= 3000, f"Word count out of bounds: {final_wc}"

# Write to raw_draft.txt
output_path = "/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/scratch/raw_draft.txt"
os.makedirs(os.path.dirname(output_path), exist_ok=True)
with open(output_path, "w", encoding="utf-8") as f:
    f.write(full_text)

print("Written successfully to:", output_path)

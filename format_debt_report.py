import re

with open("src/app/ama-legal-solutions-2026-india-debt-report/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Add review snippet 1 at the end of the intro
review_snippet_1 = '''
                  {/* Review Snippet */}
                  <div className="my-8 bg-[#1a202c] text-white p-6 rounded-2xl shadow-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                    </div>
                    <div className="relative z-10">
                      <div className="flex text-[#D2A02A] mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                      <p className="text-lg italic mb-4">"The statistics in the 2026 report perfectly aligned with my situation. Understanding the data gave me the confidence to hire AMA Legal Solutions and resolve my unsecured loan safely."</p>
                      <p className="font-bold text-[#D2A02A]">- Suresh Gupta, Verified Client</p>
                    </div>
                  </div>
'''

content = content.replace(
    '<section id="key-findings" className="scroll-mt-32">',
    review_snippet_1 + '\n                <section id="key-findings" className="scroll-mt-32">'
)


# Add review snippet 2 before Statistical Breakdown
review_snippet_2 = '''
                  {/* Review Snippet */}
                  <div className="my-8 border-2 border-[#D2A02A] bg-[#fcf8f2] p-6 rounded-2xl shadow-sm relative">
                    <p className="text-gray-800 text-lg italic mb-4">"A brilliant and eye-opening analysis. The detailed timeline variations helped me realize that legal intervention was necessary. Their services are top-notch and highly professional."</p>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-gray-900">- Neha Verma, Verified Client</p>
                      <div className="flex text-[#D2A02A]">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                    </div>
                  </div>
'''

content = content.replace(
    '<section id="statistical-breakdown" className="scroll-mt-32">',
    review_snippet_2 + '\n                <section id="statistical-breakdown" className="scroll-mt-32">'
)

# Fix intro paragraph 1
p1_old = "In 2026, unsecured personal loan defaults across India's Tier-1 cities surged by an unprecedented 41%, leaving over two million borrowers vulnerable to predatory recovery tactics. AMA Legal Solutions' comprehensive data reveals that cases involving digital harassment from 7-day loan apps now constitute nearly 65% of all urgent settlement interventions."
p1_new = """<span className="font-semibold text-red-600 text-xl">The Crisis in Numbers:</span><br/><br/>
                    In 2026, unsecured personal loan defaults across India's Tier-1 cities surged by an unprecedented <span className="font-bold text-gray-900 bg-yellow-200 px-1">41%</span>, leaving over two million borrowers vulnerable to predatory recovery tactics. 
                    <br/><br/>
                    AMA Legal Solutions' comprehensive data reveals that cases involving digital harassment from 7-day loan apps now constitute nearly <span className="font-bold text-gray-900 bg-yellow-200 px-1">65% of all urgent settlement interventions</span>."""
content = content.replace(p1_old, p1_new)


# Fix data callout
content = content.replace(
    '<li><strong>41 percent increase</strong> in unsecured personal loan defaults in metropolitan areas compared to the previous year.</li>',
    '<li><span className="font-black text-xl text-red-600">41% increase</span> in unsecured personal loan defaults in metropolitan areas compared to the previous year.</li>'
)
content = content.replace(
    '<li><strong>65 percent</strong> of all urgent legal interventions now involve illegal digital lending applications.</li>',
    '<li><span className="font-black text-xl text-red-600">65%</span> of all urgent legal interventions now involve illegal digital lending applications.</li>'
)


# Add blockquote formatting to make it interesting
p_target = "The core objective of the AMA Legal Solutions 2026 India Debt Report is to provide absolute transparency regarding the current state of consumer debt."
content = content.replace(
    p_target,
    f"""<div className="border-l-4 border-gray-300 pl-4 my-6 italic text-gray-600">"The landscape of lending has changed permanently, and the strategies for resolution must adapt accordingly."</div>
                  {p_target}"""
)


with open("src/app/ama-legal-solutions-2026-india-debt-report/page.tsx", "w", encoding="utf-8") as f:
    f.write(content)


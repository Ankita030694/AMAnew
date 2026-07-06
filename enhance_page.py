import re

with open("src/app/what-to-do-if-recovery-agents-harass-you/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Add Review Snippet 1
review_snippet_1 = '''
                    {/* Review Snippet */}
                    <div className="my-10 bg-[#1a202c] text-white p-6 md:p-8 rounded-2xl shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                      </div>
                      <div className="relative z-10">
                        <div className="flex text-[#D2A02A] mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          ))}
                        </div>
                        <p className="text-xl md:text-2xl italic mb-6 leading-relaxed">"The agents were calling my office HR and ruining my reputation. The moment AMA Legal Solutions sent the legal notice, the calls completely stopped. I wish I had contacted them sooner."</p>
                        <p className="font-bold text-[#D2A02A] text-lg">- Priya Sharma, Verified Client</p>
                      </div>
                    </div>
'''

content = content.replace(
    '<section id="step-by-step" className="scroll-mt-32">',
    review_snippet_1 + '\n                <section id="step-by-step" className="scroll-mt-32">'
)


mistakes_section_old = '''<ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
                    <li><strong>Making Partial Payments to the Agent Directly:</strong> Do not pay agents directly to stop calls. They take the commission, and the principal remains unchanged. Always pay via official bank channels.</li>
                    <li><strong>Taking New Loans to Pay Old Loans:</strong> This leads to a vicious debt trap. Seek legal debt resolution instead of taking high-interest digital app loans.</li>
                    <li><strong>Getting Abusive with the Agents:</strong> Stay calm. If you hurl abuses, they will record it and use it to justify their actions.</li>
                    <li><strong>Falling for Fake Legal Notices:</strong> A WhatsApp message claiming you will be arrested in 2 hours is almost always fake. Always consult a lawyer.</li>
                  </ul>'''

mistakes_section_new = '''<div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 border border-red-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                      <div className="flex items-center mb-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>
                        <h4 className="font-bold text-red-900 text-lg">Paying Agents Directly</h4>
                      </div>
                      <p className="text-red-800 text-sm">Do not pay agents directly to stop calls. They take the commission, and the principal remains unchanged. Always pay via official bank channels.</p>
                    </div>

                    <div className="bg-red-50 border border-red-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                      <div className="flex items-center mb-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>
                        <h4 className="font-bold text-red-900 text-lg">Taking New Loans</h4>
                      </div>
                      <p className="text-red-800 text-sm">Taking high-interest loans from digital apps to pay off old ones leads to a vicious debt trap. Seek a structured legal debt resolution instead.</p>
                    </div>

                    <div className="bg-red-50 border border-red-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                      <div className="flex items-center mb-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>
                        <h4 className="font-bold text-red-900 text-lg">Abusing the Agents</h4>
                      </div>
                      <p className="text-red-800 text-sm">Stay completely calm. If you hurl abuses, they will record it and use it to justify their aggressive actions and frame you legally.</p>
                    </div>

                    <div className="bg-red-50 border border-red-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                      <div className="flex items-center mb-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>
                        <h4 className="font-bold text-red-900 text-lg">Fearing Fake Notices</h4>
                      </div>
                      <p className="text-red-800 text-sm">A WhatsApp message claiming you will be arrested in 2 hours is almost always fake. The police do not arrest for simple loan defaults.</p>
                    </div>
                  </div>'''

content = content.replace(mistakes_section_old, mistakes_section_new)

# Add styling to bullet points in section 2
content = content.replace(
    '<ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-6">',
    '<ul className="space-y-4 text-lg text-gray-700 mb-6">'
)

def replace_li(match):
    li_content = match.group(1)
    return f'''<li className="flex items-start bg-gray-50 p-4 rounded-lg border-l-4 border-[#D2A02A]">
                      <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                      </span>
                      <div>
                        {li_content}
                      </div>
                    </li>'''

content = re.sub(r'<li>(.*?)</li>', replace_li, content, count=6)

with open("src/app/what-to-do-if-recovery-agents-harass-you/page.tsx", "w", encoding="utf-8") as f:
    f.write(content)

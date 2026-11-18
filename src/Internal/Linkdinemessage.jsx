import React, { useState } from "react";
import { Copy, Check, Send, User, Building2 } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const LinkedInMessage = () => {
     const [personName, setPersonName] = useState("");
     const [companyName, setCompanyName] = useState("");
     const [message, setMessage] = useState("");
     const [copied, setCopied] = useState(false);

     const generateMessage = (e) => {
          e.preventDefault();

          const generatedMessage = `Hi ${personName},

I hope you're doing well.

I'm a Full Stack Developer with 1 year of experience working with React.js, Angular, React Native, Node.js, TypeScript, and AWS.

I'm currently exploring new opportunities at ${companyName} and would appreciate it if you could consider my profile for any relevant current or upcoming openings.

I've attached my resume for your reference. I'd appreciate any guidance or consideration.

Thank you for your time.

Best regards,
Shubham Anand`;

          setMessage(generatedMessage);
          setCopied(false);
     };

     const copyMessage = async () => {
          try {
               await navigator.clipboard.writeText(message);
               setCopied(true);
               setTimeout(() => setCopied(false), 2000);
          } catch (error) {
               console.error("Failed to copy message:", error);
          }
     };

     return (
          <div className="min-h-screen bg-[#09090b] text-white flex items-center justify-center p-6">

               <div className="w-full max-w-2xl">

                    {/* Header */}
                    <div className="text-center mb-8">
                         <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-4">
                              <FaLinkedin size={28} className="text-blue-400" />
                         </div>

                         <h1 className="text-3xl font-bold tracking-tight">
                              LinkedIn Message Generator
                         </h1>

                         <p className="text-zinc-400 mt-2 text-sm">
                              Create professional outreach messages in seconds.
                         </p>
                    </div>

                    {/* Main Card */}
                    <div className="bg-[#18181b] border border-zinc-800 rounded-2xl p-7 shadow-2xl">

                         <form onSubmit={generateMessage} className="space-y-5">

                              {/* Person Name */}
                              <div>
                                   <label className="block text-sm font-medium text-zinc-300 mb-2">
                                        Person Name
                                   </label>

                                   <div className="relative">
                                        <User
                                             size={18}
                                             className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                                        />

                                        <input
                                             type="text"
                                             placeholder="e.g. Rahul Sharma"
                                             value={personName}
                                             onChange={(e) => setPersonName(e.target.value)}
                                             required
                                             className="w-full bg-[#09090b] border border-zinc-700 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-zinc-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                        />
                                   </div>
                              </div>

                              {/* Company Name */}
                              <div>
                                   <label className="block text-sm font-medium text-zinc-300 mb-2">
                                        Company Name
                                   </label>

                                   <div className="relative">
                                        <Building2
                                             size={18}
                                             className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                                        />

                                        <input
                                             type="text"
                                             placeholder="e.g. Google"
                                             value={companyName}
                                             onChange={(e) => setCompanyName(e.target.value)}
                                             required
                                             className="w-full bg-[#09090b] border border-zinc-700 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-zinc-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                        />
                                   </div>
                              </div>

                              {/* Generate Button */}
                              <button
                                   type="submit"
                                   className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] transition-all rounded-xl py-3 font-semibold text-white shadow-lg shadow-blue-600/20"
                              >
                                   <Send size={17} />
                                   Generate Message
                              </button>

                         </form>

                         {/* Generated Message */}
                         {message && (
                              <div className="mt-7 pt-6 border-t border-zinc-800">

                                   <div className="flex items-center justify-between mb-3">
                                        <h3 className="font-semibold text-white">
                                             Generated Message
                                        </h3>

                                        <span className="text-xs text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                                             Ready to send
                                        </span>
                                   </div>

                                   <textarea
                                        value={message}
                                        readOnly
                                        rows={9}
                                        className="w-full bg-[#09090b] border border-zinc-800 rounded-xl p-4 text-sm text-zinc-300 leading-7 outline-none resize-none"
                                   />

                                   <button
                                        onClick={copyMessage}
                                        className={`mt-4 w-full flex items-center justify-center gap-2 rounded-xl py-3 font-semibold transition-all ${copied
                                             ? "bg-green-600 text-white"
                                             : "bg-zinc-800 hover:bg-zinc-700 text-white"
                                             }`}
                                   >
                                        {copied ? (
                                             <>
                                                  <Check size={18} />
                                                  Copied Successfully
                                             </>
                                        ) : (
                                             <>
                                                  <Copy size={18} />
                                                  Copy Message
                                             </>
                                        )}
                                   </button>

                              </div>
                         )}

                    </div>

                    {/* Footer */}
                    <p className="text-center text-xs text-zinc-600 mt-6">
                         Professional outreach made simple.
                    </p>

               </div>
          </div>
     );
};

export default LinkedInMessage;
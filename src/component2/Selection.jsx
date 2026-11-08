import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { motion } from "framer-motion";
import { Check, Copy } from 'lucide-react';

const Selection = () => {

     const [selectedWord, setSelectedWord] = useState("");
     const [buttonPosition, setButtonPosition] = useState(null);
     const [copied, setCopied] = useState(false);

     const handleCopy = async () => {
          if (!selectedWord) return;

          try {
               let clipboardError;
               let copySucceeded = false;

               if (navigator.clipboard && window.isSecureContext) {
                    try {
                         await navigator.clipboard.writeText(selectedWord);
                         copySucceeded = true;
                    } catch (error) {
                         clipboardError = error;
                    }
               }

               if (!copySucceeded) {
                    const textArea = document.createElement("textarea");
                    textArea.value = selectedWord;
                    textArea.setAttribute("readonly", "");
                    textArea.style.position = "fixed";
                    textArea.style.opacity = "0";
                    document.body.appendChild(textArea);
                    textArea.select();

                    try {
                         copySucceeded = document.execCommand("copy");
                    } finally {
                         document.body.removeChild(textArea);
                    }

                    if (!copySucceeded) {
                         throw clipboardError || new Error("The browser rejected the copy request.");
                    }
               }

               window.getSelection()?.removeAllRanges();
               setSelectedWord("");
               setButtonPosition(null);
               setCopied(false);
          } catch (error) {
               console.error("Unable to copy text:", error);
          }
     };

     useEffect(() => {
          const handleSelection = () => {
               const selection = window.getSelection();

               if (!selection || selection.isCollapsed || !selection.rangeCount) {
                    setSelectedWord("");
                    setButtonPosition(null);
                    return;
               }

               const selectedText = selection.toString().trim();

               if (!selectedText) {
                    setSelectedWord("");
                    setButtonPosition(null);
                    return;
               }

               const range = selection.getRangeAt(0);
               const rects = Array.from(range.getClientRects());
               const selectionRect = rects[rects.length - 1] || range.getBoundingClientRect();

               if (!selectionRect || (!selectionRect.width && !selectionRect.height)) {
                    setSelectedWord("");
                    setButtonPosition(null);
                    return;
               }

               setSelectedWord(selectedText);

               setButtonPosition({
                    x: Math.min(
                         Math.max(selectionRect.left + selectionRect.width / 2, 60),
                         window.innerWidth - 60
                    ),
                    y: Math.min(selectionRect.bottom + 10, window.innerHeight - 55),
               });

               setCopied(false);
          };

          document.addEventListener("selectionchange", handleSelection);
          document.addEventListener("mouseup", handleSelection);

          return () => {
               document.removeEventListener("selectionchange", handleSelection);
               document.removeEventListener("mouseup", handleSelection);
          };
     }, []);

     return (
          <AnimatePresence>
               {selectedWord && buttonPosition && (
                    <motion.button
                         initial={{ opacity: 0, scale: 0.85, y: 6 }}
                         animate={{ opacity: 1, scale: 1, y: 0 }}
                         exit={{ opacity: 0, scale: 0.85, y: 6 }}
                         transition={{ duration: 0.18, ease: "easeOut" }}
                         onMouseDown={(e) => e.preventDefault()}
                         onClick={handleCopy}
                         style={{
                              position: "fixed",
                              left: buttonPosition.x,
                              top: buttonPosition.y,
                              transform: "translateX(-50%)",
                              zIndex: 9999,
                         }}
                         className="group flex items-center gap-2 rounded-xl border border-white/10 bg-[#171a21] px-4 py-2.5 text-xs font-medium text-neutral-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-200 hover:border-lime-400/40 hover:bg-[#20252d] hover:text-lime-300"
                    >
                         {copied ? (
                              <>
                                   <Check size={14} className="text-lime-400" />
                                   <span className="text-lime-300">Copied</span>
                              </>
                         ) : (
                              <>
                                   <Copy
                                        size={14}
                                        className="text-neutral-400 transition-colors group-hover:text-lime-400"
                                   />
                                   Copy
                              </>
                         )}
                    </motion.button>
               )}
          </AnimatePresence>
     )
}

export default Selection

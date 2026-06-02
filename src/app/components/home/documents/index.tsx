"use client";

import { useState } from "react";

const PdfModal = ({ isOpen, onClose, pdfUrl, title }: { isOpen: boolean, onClose: () => void, pdfUrl: string, title: string }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-gray-900 w-full max-w-5xl h-[90vh] rounded-xl flex flex-col shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-primary/10">
          <h3 className="font-bold text-lg">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1">
            <iframe 
                src={`${pdfUrl}#toolbar=0&navpanes=0&zoom=75`} 
                className="w-full h-full rounded-b-xl" 
                title={title} 
            />
        </div>
      </div>
    </div>
  );
};

const Documents = () => {
  const [modalConfig, setModalConfig] = useState({ isVisible: false, url: "", title: "" });

  const openDoc = (url: string, title: string) => {
    setModalConfig({ isVisible: true, url, title });
  };

  return (
    <section className="py-10 text-center" id="documents">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-5 items-center justify-center mb-8">
            <h2 className="text-3xl font-bold">Mes Documents</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          <button 
            onClick={() => openDoc("/portfolio/cv.pdf", "Mon Curriculum Vitae")}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition font-medium shadow-lg flex items-center gap-2"
          >
            CV
          </button>
          <button 
            onClick={() => openDoc("/portfolio/rapport-stage-1.pdf", "Rapport de Stage - 1ère Année")}
            className="px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/5 transition font-medium flex items-center gap-2"
          >
            Rapport de stage 1ère année
          </button>
          <button 
            onClick={() => openDoc("/portfolio/AttestationStage1.pdf", "Attestation de stage 1ère année")}
            className="px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/5 transition font-medium flex items-center gap-2"
          >
            Attestation de stage 1ère année
          </button>
          <button 
            onClick={() => openDoc("/portfolio/rapport-stage-2.pdf", "Rapport de Stage - 2ème Année")}
            className="px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/5 transition font-medium flex items-center gap-2"
          >
            Rapport de stage 2ème année
          </button>
          <button 
            onClick={() => openDoc("/portfolio/AttestationStage2.pdf", "Attestation de stage 2ème année")}
            className="px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/5 transition font-medium flex items-center gap-2"
          >
            Attestation de stage 2ème année
          </button>
          <button 
            onClick={() => openDoc("/portfolio/anssi.pdf", "Certification ANSSI")}
            className="px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/5 transition font-medium flex items-center gap-2"
          >
            Certification ANSSI
          </button>
          <button 
            onClick={() => openDoc("/portfolio/certification-pix.pdf", "Certification PIX")}
            className="px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/5 transition font-medium flex items-center gap-2"
          >
            Certification PIX
          </button>
          <button 
            onClick={() => openDoc("/portfolio/GrilleSynth.pdf", "Synthèse des compétences")}
            className="px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/5 transition font-medium flex items-center gap-2"
          >
            Synthèse des compétences
          </button>
          <button 
            onClick={() => openDoc("/portfolio/SchemaLux.pdf", "Schéma de l'application Stage 2")}
            className="px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/5 transition font-medium flex items-center gap-2"
          >
            Schéma de l'application Stage 2
          </button>
        </div>
      </div>

      <PdfModal 
        isOpen={modalConfig.isVisible} 
        onClose={() => setModalConfig({ ...modalConfig, isVisible: false })} 
        pdfUrl={modalConfig.url} 
        title={modalConfig.title} 
      />
    </section>
  );
};

export default Documents;
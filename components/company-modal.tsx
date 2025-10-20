"use client"

import { useState } from "react"
import { X, Globe, MapPin, Users, Briefcase, BookOpen } from "lucide-react"
import type { Company } from "@/lib/companies-data"

interface CompanyModalProps {
  company: Company | null
  isOpen: boolean
  onClose: () => void
}

export function CompanyModal({ company, isOpen, onClose }: CompanyModalProps) {
  const [activeTab, setActiveTab] = useState<"info" | "pfe">("info")

  if (!isOpen || !company) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
              <img 
                src={company.logo} 
                alt={company.name} 
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{company.name}</h2>
              <p className="text-primary font-medium">{company.sector}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b bg-gray-50">
          <button
            onClick={() => setActiveTab("info")}
            className={`flex-1 px-6 py-4 font-medium transition-colors ${
              activeTab === "info" 
                ? "text-primary border-b-2 border-primary bg-white" 
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Briefcase className="w-4 h-4 inline mr-2" />
            Informations Entreprise
          </button>
          <button
            onClick={() => setActiveTab("pfe")}
            className={`flex-1 px-6 py-4 font-medium transition-colors ${
              activeTab === "pfe" 
                ? "text-primary border-b-2 border-primary bg-white" 
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            PFE Books
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === "info" ? (
            <div className="space-y-6">
              {/* Company Info */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Globe className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Site Web</p>
                    <p className="font-medium">{company.website}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Localisation</p>
                    <p className="font-medium">{company.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Employés</p>
                    <p className="font-medium">{company.employees}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Description</h3>
                <p className="text-gray-700 leading-relaxed">{company.description}</p>
              </div>

              {/* Specialties */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Domaines d'expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {company.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                PFE Books
              </h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-yellow-800 font-medium">
                  📚 Non disponible maintenant
                </p>
                <p className="text-yellow-700 text-sm mt-2">
                  Les livres de PFE seront ajoutés après le forum. 
                  Restez connectés pour les mises à jour !
                </p>
              </div>
              <div className="mt-6 text-sm text-gray-500">
                <p>Les sujets de PFE et stages seront disponibles prochainement</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
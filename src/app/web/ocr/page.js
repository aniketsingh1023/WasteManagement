"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  FileText,
  CheckCircle,
  ArrowLeft,
  Eye,
  Download,
  Zap,
  AlertCircle,
  Brain,
  ScanText,
  FileImage,
  Sparkles,
  Shield,
  Clock,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/web/core/Navbar";

export default function OCRPage() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const extractedData = {
    applicant_name: "Rajesh Kumar Mahato",
    father_name: "Suresh Kumar Mahato",
    village: "Jhilimili",
    district: "Purulia",
    state: "West Bengal",
    survey_number: "Plot No. 127, Mouza Jhilimili",
    area_claimed: "2.45 acres",
    land_type: "Forest Land",
    document_type: "FRA Title Deed",
    issue_date: "15-March-2023",
    authority: "District Collector, Purulia",
    registration_number: "FRA/PUR/2023/0127",
  };

  const processingSteps = [
    { step: "Document Upload", status: "complete", time: "0.2s" },
    { step: "Image Enhancement", status: "complete", time: "1.4s" },
    { step: "Text Recognition", status: "complete", time: "2.8s" },
    { step: "Data Extraction", status: "complete", time: "1.2s" },
    { step: "Validation & Formatting", status: "complete", time: "0.8s" },
  ];

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = (file) => {
    setSelectedFile(file);
    setIsProcessing(true);
    setUploadProgress(0);

    // Simulate upload progress with more realistic timing
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsProcessing(false);
            setIsComplete(true);
          }, 800);
          return 100;
        }
        return prev + Math.random() * 15 + 5; // More varied progress
      });
    }, 300);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const resetUpload = () => {
    setUploadProgress(0);
    setIsProcessing(false);
    setIsComplete(false);
    setSelectedFile(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="mb-8 transform transition-all duration-700 ease-out"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4 mb-4">
            <button
              onClick={() => (window.location.href = "/web/dashboard")}
              className="flex items-center space-x-2 text-slate-600 hover:text-emerald-600 transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:border-emerald-300 group-hover:bg-emerald-50 transition-all duration-300">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="font-medium">Back to Dashboard</span>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
              <ScanText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                OCR Document Scanner
              </h1>
              <p className="text-slate-600 text-lg">
                AI-powered document processing and data extraction
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6 h-fit">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <Upload className="w-4 h-4 text-white" />
                </div>
                Document Upload
              </h2>

              {!isComplete ? (
                <div className="space-y-6">
                  {/* Drag & Drop Area */}
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 cursor-pointer relative overflow-hidden ${
                      isDragOver
                        ? "border-emerald-400 bg-gradient-to-br from-emerald-50 to-teal-50 scale-105"
                        : "border-slate-300 hover:border-emerald-400 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50"
                    }`}
                    onClick={handleFileSelect}
                  >
                    {/* Background Animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <FileImage className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        Drop your FRA document here
                      </h3>
                      <p className="text-slate-600 mb-4">
                        or click to browse files
                      </p>
                      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-100 rounded-xl">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-slate-700 font-medium">
                          Supports: PDF, JPG, PNG (Max 10MB)
                        </span>
                      </div>
                    </div>
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) =>
                      e.target.files?.[0] && handleFileUpload(e.target.files[0])
                    }
                    className="hidden"
                  />

                  {/* File Info */}
                  {selectedFile && (
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-8 h-8 text-emerald-600" />
                        <div>
                          <p className="font-medium text-slate-800">
                            {selectedFile.name}
                          </p>
                          <p className="text-sm text-slate-600">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Progress Bar */}
                  {isProcessing && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                            <Brain className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-semibold text-slate-800">
                            AI Processing Document...
                          </span>
                        </div>
                        <span className="text-sm font-medium text-emerald-600">
                          {Math.round(uploadProgress)}%
                        </span>
                      </div>

                      <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className="bg-gradient-to-r from-emerald-500 to-teal-600 h-3 rounded-full"
                          initial={{ width: 0 }}
                          animate={{
                            width: `${Math.min(uploadProgress, 100)}%`,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      {/* Processing Steps */}
                      <div className="space-y-2">
                        {processingSteps.map((step, index) => (
                          <div
                            key={step.step}
                            className={`flex items-center justify-between p-2 rounded-lg transition-all duration-300 ${
                              uploadProgress > (index + 1) * 20
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-slate-50 text-slate-600"
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              <div
                                className={`w-2 h-2 rounded-full ${
                                  uploadProgress > (index + 1) * 20
                                    ? "bg-emerald-500"
                                    : "bg-slate-400"
                                }`}
                              ></div>
                              <span className="text-sm font-medium">
                                {step.step}
                              </span>
                            </div>
                            <span className="text-xs">{step.time}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      Processing Complete!
                    </h3>
                    <p className="text-slate-600">
                      Document has been successfully processed and data
                      extracted with high accuracy.
                    </p>
                  </div>

                  <div className="flex space-x-3 justify-center">
                    <button
                      onClick={resetUpload}
                      className="px-6 py-3 border-2 border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 hover:border-emerald-300 transition-all duration-300 font-medium"
                    >
                      Upload Another
                    </button>
                    <button
                      onClick={() => (window.location.href = "/web/dss")}
                      className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center space-x-2 font-medium shadow-lg"
                    >
                      <Zap className="w-4 h-4" />
                      <span>Run DSS Analysis</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Extracted Data Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6 h-fit">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-800 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mr-3">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  Extracted Data
                </h2>
                {isComplete && (
                  <div className="flex space-x-2">
                    <button className="p-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>

              {!isComplete ? (
                <div className="flex flex-col items-center justify-center py-16 text-slate-500">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 opacity-50" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-700 mb-2">
                    Ready to Process
                  </h3>
                  <p className="text-center max-w-sm">
                    Upload a document to see extracted data appear here with
                    detailed field information
                  </p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                  {Object.entries(extractedData).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      className="p-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 group"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <label className="text-sm font-semibold text-slate-700 capitalize mb-1 block">
                            {key.replace(/_/g, " ")}
                          </label>
                          <p className="text-slate-900 font-medium">{value}</p>
                        </div>
                        <div className="w-2 h-2 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Confidence Metrics */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="mt-6 grid grid-cols-2 gap-4"
                  >
                    <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-100 rounded-xl border border-emerald-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-emerald-600" />
                        <span className="font-semibold text-emerald-800">
                          Accuracy
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-emerald-900">94%</p>
                      <p className="text-sm text-emerald-700">
                        High confidence
                      </p>
                    </div>

                    <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl border border-blue-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-blue-800">
                          Speed
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-blue-900">6.4s</p>
                      <p className="text-sm text-blue-700">Processing time</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Action Buttons */}
        {isComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex justify-center space-x-4"
          >
            <button
              onClick={() => (window.location.href = "/web/dashboard")}
              className="px-8 py-3 border-2 border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 hover:border-emerald-300 transition-all duration-300 font-semibold"
            >
              Back to Dashboard
            </button>
            <button
              onClick={() => (window.location.href = "/web/dss")}
              className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center space-x-2 font-semibold shadow-lg"
            >
              <Brain className="w-5 h-5" />
              <span>Proceed to DSS Analysis</span>
            </button>
          </motion.div>
        )}

        {/* Features & Info Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Features */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              AI-Powered Features
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-300">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mt-0.5">
                  <Brain className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">
                    Smart Text Recognition
                  </p>
                  <p className="text-sm text-slate-600">
                    Advanced OCR with 94%+ accuracy for handwritten and printed
                    text
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-300">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-0.5">
                  <Shield className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">
                    Data Validation
                  </p>
                  <p className="text-sm text-slate-600">
                    Automatic validation against FRA guidelines and regulations
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-300">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mt-0.5">
                  <Zap className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">
                    Instant Processing
                  </p>
                  <p className="text-sm text-slate-600">
                    Fast document processing with real-time progress tracking
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Security Info */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                <Shield className="w-4 h-4 text-white" />
              </div>
              Security & Compliance
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-800">
                    End-to-End Encryption
                  </span>
                </div>
                <p className="text-sm text-green-700">
                  All documents are encrypted during upload, processing, and
                  storage
                </p>
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                <p className="flex items-start space-x-2">
                  <span className="text-emerald-600">•</span>
                  <span>
                    Compliant with government data protection standards
                  </span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-emerald-600">•</span>
                  <span>
                    Automatic deletion of processed files after 30 days
                  </span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-emerald-600">•</span>
                  <span>
                    Audit trail maintained for all document processing
                    activities
                  </span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-emerald-600">•</span>
                  <span>Role-based access control for sensitive documents</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

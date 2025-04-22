'use client'

// src/components/modules/Experience/index.tsx
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-24 px-6 md:px-24 bg-gray-900 text-white font-mono transform"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Symlink‑style Experience Header */}
      <div className="flex items-center space-x-2 mb-6 text-3xl md:text-4xl -translate-y-15">
        <span className="text-white font-bold">./Gaurav_Raut</span>
        <span className="text-red-500"> -> </span>
        <span className="text-green-500 font-bold">./Experience</span>
      </div>

      {/* Terminal‑style Folder Hierarchy for ArcBest Roles */}
				<div className="bg-gray-800 p-6 rounded-md  -translate-y-15">
        {/* Company Logo with colored background and hyperlink */}
        <a
          href="https://www.arcb.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[#0033cc] rounded-md p-2 mb-4"
        >
          <img
            src="/icons/arcb.svg"
            alt="ArcBest"
            className="h-8 w-auto mr-2"
          />

        </a>

        {/* Role: Perception II */}
        <div className="flex pl-2 mt-4">
          <span className="text-[#4EC9B0] w-8 flex-shrink-0">|_</span>
          <p className="text-[#FFA067] font-semibold text-xl md:text-2xl flex-1">
            Robotics Software Engineer, Perception II
          </p>
        </div>
        {/* Content items under Perception II */}
        <div className="flex pl-4 mt-2">
          <span className="text-[#4EC9B0] w-8 flex-shrink-0">|_</span>
          <p className="text-[#D4D4D4] text-base md:text-lg flex-1">
            Established a state-machine-based perception pipeline for dimensioning & barcode scanning on edge devices
          </p>
        </div>
        <div className="flex pl-4 mt-1">
          <span className="text-[#4EC9B0] w-8 flex-shrink-0">|_</span>
          <p className="text-[#D4D4D4] text-base md:text-lg flex-1">
            Built an autonomous barcode detection pipeline using a PTZ camera for 3-DOF scanning
          </p>
        </div>
        <div className="flex pl-4 mt-1">
          <span className="text-[#4EC9B0] w-8 flex-shrink-0">|_</span>
          <p className="text-[#D4D4D4] text-base md:text-lg flex-1">
            Worked on autonomous stacking of automotive freights using LiDAR-camera fusion
          </p>
        </div>
        <div className="flex pl-4 mt-1">
          <span className="text-[#4EC9B0] w-8 flex-shrink-0">|_</span>
          <p className="text-[#D4D4D4] text-base md:text-lg flex-1">
            Mentored summer interns on a large-scale 3D reconstruction project
          </p>
        </div>

        {/* Role: Perception I */}
        <div className="flex pl-2 mt-6">
          <span className="text-[#4EC9B0] w-8 flex-shrink-0">|_</span>
          <p className="text-[#FFA067] font-semibold text-xl md:text-2xl flex-1">
            Robotics Software Engineer, Perception I
          </p>
        </div>
        {/* Content items under Perception I */}
        <div className="flex pl-4 mt-2">
          <span className="text-[#4EC9B0] w-8 flex-shrink-0">|_</span>
          <p className="text-[#D4D4D4] text-base md:text-lg flex-1">
            Implemented a pallet detection network to detect and localize pallets and their pockets
          </p>
        </div>
        <div className="flex pl-4 mt-1">
          <span className="text-[#4EC9B0] w-8 flex-shrink-0">|_</span>
          <p className="text-[#D4D4D4] text-base md:text-lg flex-1">
            Established an Azure-based MLDC pipeline to store datasets, train models, and deploy
          </p>
        </div>
        <div className="flex pl-4 mt-1">
          <span className="text-[#4EC9B0] w-8 flex-shrink-0">|_</span>
          <p className="text-[#D4D4D4] text-base md:text-lg flex-1">
            Detected automotive parts freight with abnormal sizes using 3D point cloud data
          </p>
        </div>
        <div className="flex pl-4 mt-1">
          <span className="text-[#4EC9B0] w-8 flex-shrink-0">|_</span>
          <p className="text-[#D4D4D4] text-base md:text-lg flex-1">
            Built a CUDA-accelerated point cloud filtering pipeline using cuPCL and custom CUDA filters
          </p>
        </div>

        {/* Role: Perception Intern */}
        <div className="flex pl-2 mt-6">
          <span className="text-[#4EC9B0] w-8 flex-shrink-0">|_</span>
          <p className="text-[#FFA067] font-semibold text-xl md:text-2xl flex-1">
            Robotics Software Engineer, Perception Intern
          </p>
        </div>
        {/* Content items under Intern */}
        <div className="flex pl-4 mt-2">
          <span className="text-[#4EC9B0] w-8 flex-shrink-0">|_</span>
          <p className="text-[#D4D4D4] text-base md:text-lg flex-1">
            Deployed deep-learning algorithms on edge devices using ONNX
          </p>
        </div>
        <div className="flex pl-4 mt-1">
          <span className="text-[#4EC9B0] w-8 flex-shrink-0">|_</span>
          <p className="text-[#D4D4D4] text-base md:text-lg flex-1">
            Built a ROS-compatible stack for real-time ground points segmentation
          </p>
        </div>
        <div className="flex pl-4 mt-1">
          <span className="text-[#4EC9B0] w-8 flex-shrink-0">|_</span>
          <p className="text-[#D4D4D4] text-base md:text-lg flex-1">
            Developed safety-alert algorithms in the robot’s 3D environment
          </p>
        </div>
        <div className="flex pl-4 mt-1">
          <span className="text-[#4EC9B0] w-8 flex-shrink-0">|_</span>
          <p className="text-[#D4D4D4] text-base md:text-lg flex-1">
            Created a custom dataset and used transfer learning for 3D information extraction
          </p>
        </div>
        <div className="flex pl-4 mt-1">
          <span className="text-[#4EC9B0] w-8 flex-shrink-0">|_</span>
          <p className="text-[#D4D4D4] text-base md:text-lg flex-1">
            Implemented 2D-3D extrinsic calibration methods for ToF cameras
          </p>
        </div>
      </div>
    </motion.section>
  )
}
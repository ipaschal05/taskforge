"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Theme } from "@/components/Themes"; 
import { 
  FiUser, 
  FiBriefcase, 
  FiStar, 
  FiPlusCircle, 
  FiSettings, 
  FiLogOut, 
  FiArrowLeft,
  FiCheckCircle,
  FiMapPin
} from "react-icons/fi";

export default function UserProfilePage() {
  const router = useRouter();

  const [user, setUser] = useState({
    name: "chisom paschal",
    email: "ipaschal050@gmail.com",
    role: "Phone Engineer",
    location: "kubwa, Abuja, Nigeria",
    phone: "09067981490",
    joinedDate: "October 2026",
    rating: 4.8,
    reviewsCount: 24,
    avatar: "",
  });

  const [myGigs, setMyGigs] = useState([
    { id: "1", title: "Residential House Wiring", category: "Electrical", status: "In Progress", budget: "₦45,000" },
    { id: "2", title: "Gate Iron Fabrication", category: "Welding", status: "Completed", budget: "₦120,000" },
  ]);

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <main className="min-h-screen bg-slate-950 font-sans text-slate-100 pb-20 selection:bg-orange-500 selection:text-white">
      {/* Top Header Navigation Bar */}
      <div className="bg-slate-900/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
          >
            <FiArrowLeft /> Back to Home
          </Link>
          <span 
            className="text-xs uppercase font-extrabold tracking-widest px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: Theme.primary }}
          >
            Task_Forge Profile
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-8 space-y-8">
        {/* Profile Header Card */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-3xl font-bold text-orange-400 border-4 border-white/5 shadow-inner overflow-hidden">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              ) : (
                <FiUser />
              )}
            </div>
            <div className="space-y-1">
              <h1 className="text-2xl font-black text-white">{user.name}</h1>
              <p className="text-sm text-orange-400 font-medium">{user.role}</p>
              <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-gray-400 pt-1">
                <span className="flex items-center gap-1"><FiMapPin /> {user.location}</span>
                <span className="flex items-center gap-1">{user.email}</span>
              </div>
              
              <div className="mt-3 flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="text-[11px] font-medium px-3 py-1 rounded-full text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1">
                  <FiCheckCircle /> Verified Skilled Professional
                </span>
                <span className="text-[11px] font-medium px-3 py-1 rounded-full text-amber-400 bg-amber-500/10 border border-amber-500/20 flex items-center gap-1">
                  <FiStar className="fill-amber-400" /> {user.rating} ({user.reviewsCount} reviews)
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto">
            <Link
              href="/post-task"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white shadow-lg hover:opacity-90 transition-all"
              style={{ backgroundColor: Theme.primary }}
            >
              <FiPlusCircle /> Post New Service
            </Link>
            <button
              onClick={handleLogout}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-red-400 bg-red-500/10 hover:bg-red-500/20 transition-colors border border-red-500/20"
            >
              <FiLogOut /> Log Out
            </button>
          </div>
        </div>

        {/* Dashboard Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <FiBriefcase className="text-orange-400" /> My Practical Tasks & Gigs
                </h2>
                <span className="text-xs font-semibold text-gray-400">
                  {myGigs.length} Active
                </span>
              </div>

              {myGigs.length === 0 ? (
                <p className="text-xs text-gray-400 py-8 text-center">You haven't listed or accepted any tasks yet.</p>
              ) : (
                <div className="space-y-4">
                  {myGigs.map((gig) => (
                    <div 
                      key={gig.id}
                      className="p-4 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-between hover:border-orange-500/40 transition-all"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-orange-500/20 text-orange-400 border border-orange-500/30">
                            {gig.category}
                          </span>
                          <span className="text-xs font-bold text-emerald-400">{gig.budget}</span>
                        </div>
                        <h3 className="text-sm font-bold text-white mt-1.5">{gig.title}</h3>
                      </div>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full border ${
                        gig.status === "Completed" 
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                          : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                      }`}>
                        {gig.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 shadow-xl space-y-5">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <FiSettings /> Account Overview
              </h2>
              
              <div className="space-y-3 text-xs text-gray-300 divide-y divide-white/5">
                <div className="pt-3 flex justify-between">
                  <span className="text-gray-400">Phone Number</span>
                  <span className="font-semibold text-white">{user.phone}</span>
                </div>
                <div className="pt-3 flex justify-between">
                  <span className="text-gray-400">Member Since</span>
                  <span className="font-semibold text-white">{user.joinedDate}</span>
                </div>
                <div className="pt-3 flex justify-between">
                  <span className="text-gray-400">Account Type</span>
                  <span className="font-semibold text-orange-400">Skilled Provider</span>
                </div>
                <div className="pt-3 flex justify-between">
                  <span className="text-gray-400">Profile Status</span>
                  <span className="font-semibold text-emerald-400">Active & Visible</span>
                </div>
              </div>

              <div className="pt-3">
                <button 
                  onClick={() => alert("Edit profile modal coming soon!")}
                  className="w-full py-2.5 rounded-xl font-semibold text-xs text-white bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
                >
                  Edit Profile Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
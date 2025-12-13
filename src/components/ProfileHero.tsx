import React from "react";
import Image from "next/image";
import userData from "../lib/userData";

export default function ProfileHero() {
  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto rounded-3xl shadow-lg overflow-hidden mt-8 bg-white">
      {/* Top background section with padding and background image */}
      <div
        className="relative w-[92%] mx-auto flex items-end justify-center bg-white"
        style={{
          height: '40%',
          minHeight: '160px',
          maxHeight: '220px',
          backgroundImage: 'url(/home/profile-bg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '1.5rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          borderRadius: '1.5rem',
          boxShadow: '0 2px 16px 0 rgba(0,0,0,0.04)',
        }}
      >
        <button className="absolute top-4 left-4 px-4 py-1 rounded-full glass-button text-gray-800 font-medium">
          Edit Profile
        </button>
        {/* Avatar and Title Overlay */}
        <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col items-center">
          <div className="relative flex items-center justify-center">
            {/* Darker gold ring */}
            <div className="w-28 h-28 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFCA56' }}>
              {/* Blue inner circle, avatar fills it */}
              <div className="w-24 h-24 rounded-full bg-[#407BFF] flex items-center justify-center shadow-lg overflow-hidden">
                <Image src={userData.imageUrl} alt="Avatar" width={96} height={96} className="object-cover w-full h-full" />
              </div>
              {/* Campus Expert label - overlayed at bottom, bigger, black, no border */}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 px-4 py-2 bg-[#FFCA56] text-black font-bold rounded-full text-base shadow whitespace-nowrap">
                {userData.role}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Details Section */}
      <div className="flex flex-col items-center pb-6 px-6 w-full" style={{ marginTop: '4.5rem' }}>
        <h2 className="text-xl font-semibold text-gray-900 mt-2">{userData.name}</h2>
        <p className="text-gray-600 text-base">{userData.institution}</p>
        <p className="text-gray-500 text-base mt-1">Member Since {userData.memberSince}</p>
        <button className="mt-4 w-full bg-black text-white py-2 rounded-xl flex items-center justify-center gap-2 shadow hover:bg-gray-900 transition-all">
          🔗 Share Referral Link
        </button>
          {/* Divider */}
          <hr className="w-full border-t border-gray-200 my-6" />
          {/* Badges Section */}
          <div className="w-full">
            <h3 className="text-base font-semibold text-gray-800 mb-3">Badges</h3>
            <div className="flex gap-4 items-center overflow-x-auto scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
                {userData.badges && userData.badges.map((badge, idx) => (
                  <div key={badge.name + idx} className="flex flex-col items-center flex-shrink-0">
                    <img src={badge.icon} alt={badge.name + ' Badge'} className="w-16 h-16" />
                    <span className="mt-1 text-xs font-bold uppercase text-gray-700">{badge.name}</span>
                  </div>
                ))}
            </div>
          </div>
      </div>
    </div>
  );
}
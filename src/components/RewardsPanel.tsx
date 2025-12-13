"use client";
import React, { useState } from "react";
import Image from "next/image";
import userData from "../lib/userData";

type RewardHistoryItem = {
  type: string;
  coins: number;
  date?: string;
};

export default function RewardsPanel() {
  const rewards = userData.rewards;
  const [isRedeeming, setIsRedeeming] = useState(false);

  const handleRedeem = async () => {
    if (!rewards || rewards.availableCoins <= 0) return;
    const ok = confirm("Redeem available coins?");
    if (!ok) return;
    try {
      setIsRedeeming(true);
      // Simulate API call
      await new Promise((r) => setTimeout(r, 900));
      alert("Redeem request submitted (mock)");
    } catch (err) {
      console.error(err);
      alert("Redeem failed");
    } finally {
      setIsRedeeming(false);
    }
  };

  const HistoryRow = ({ item }: { item: RewardHistoryItem }) => (
    <div className="flex items-center justify-between bg-white rounded-xl py-3 px-4 mb-3 shadow-sm">
      <div className="text-sm font-medium text-gray-800">{item.type}</div>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full" style={{ background: "#FFDE8A" }} />
        <div className="text-sm font-semibold text-gray-800">{item.coins.toLocaleString()} Coins</div>
      </div>
    </div>
  );

  return (
    <section className="bg-white rounded-2xl p-4 w-full max-w-md mx-auto shadow-md mt-6">
      <h2 className="font-bold text-lg text-[#222] mb-3">Rewards</h2>

      <div className="rounded-xl p-4 mb-5" style={{ border: "1px solid #F5DFAF", background: "#FFFBF6" }}>
        <div className="text-center mb-3">
          <div className="text-base text-gray-900">Available Coins</div>
        </div>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full" style={{ background: "#FFEBC1" }} />
          <div className="text-2xl font-bold text-gray-900">{rewards.availableCoins.toLocaleString()} Coins</div>
        </div>
        <button
          onClick={handleRedeem}
          disabled={isRedeeming || rewards.availableCoins <= 0}
          className={`w-full py-3 rounded-full text-white font-medium shadow ${
            isRedeeming || rewards.availableCoins <= 0 ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:opacity-90"
          }`}
        >
          {isRedeeming ? "Processing..." : "Redeem"}
        </button>
      </div>

      <div>
        <h3 className="text-base font-semibold text-gray-800 mb-3">History</h3>
        <div>
          {rewards.history && rewards.history.length > 0 ? (
            rewards.history.map((h, idx) => <HistoryRow key={h.type + idx} item={h as RewardHistoryItem} />)
          ) : (
            <div className="text-sm text-gray-500">No reward history yet.</div>
          )}
        </div>
        <div className="text-center mt-2">
          <a href="#" className="text-sm underline text-gray-800">View All</a>
        </div>
      </div>
    </section>
  );
}

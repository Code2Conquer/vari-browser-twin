
import { useState } from "react";
import NavbarSection from "@/components/NavbarSection";
import FooterSection from "@/components/FooterSection";
import SettingsSection from "@/components/SettingsSection";

const Settings = () => {
  return (
    <div className="min-h-screen bg-obsidian">
      <NavbarSection />
      
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-white mb-8">Settings</h1>
        <SettingsSection />
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Settings;

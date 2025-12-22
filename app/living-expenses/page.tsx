"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type FrequencyType = "weekly" | "fortnightly" | "monthly";

interface ExpenseField {
  amount: string;
  frequency: FrequencyType;
}

export default function LivingExpenses() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    netIncome: { amount: "", frequency: "weekly" as FrequencyType },
    rentMortgage: { amount: "", frequency: "weekly" as FrequencyType },
    utilities: { amount: "", frequency: "weekly" as FrequencyType },
    groceries: { amount: "", frequency: "weekly" as FrequencyType },
    transport: { amount: "", frequency: "weekly" as FrequencyType },
    recreation: { amount: "", frequency: "weekly" as FrequencyType },
    insurances: { amount: "", frequency: "weekly" as FrequencyType },
    clothingPersonal: { amount: "", frequency: "weekly" as FrequencyType },
    others: { amount: "", frequency: "weekly" as FrequencyType },
  });

  const handleAmountChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: { ...prev[field], amount: value },
    }));
  };

  const handleFrequencyChange = (
    field: keyof typeof formData,
    value: FrequencyType
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: { ...prev[field], frequency: value },
    }));
  };

  return (
    <div className="min-h-screen bg-white font-[var(--font-lato)]">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-7 py-5 h-14 font-[var(--font-poppins)]">
        <div className="text-sm font-medium text-loan-text">9:30 PM</div>
        <div className="flex items-center gap-2">
          {/* Cellular Connection */}
          <svg width="17" height="11" viewBox="0 0 17 11" fill="none" className="fill-loan-text">
            <path d="M2 6.66699C2.55228 6.66699 3 7.11471 3 7.66699V9.66699C2.99982 10.2191 2.55218 10.667 2 10.667H1C0.447824 10.667 0.000175969 10.2191 0 9.66699V7.66699C0 7.11471 0.447715 6.66699 1 6.66699H2ZM6.66699 4.66699C7.21913 4.66717 7.66699 5.11482 7.66699 5.66699V9.66699C7.66682 10.219 7.21902 10.6668 6.66699 10.667H5.66699C5.11482 10.667 4.66717 10.2191 4.66699 9.66699V5.66699C4.66699 5.11471 5.11471 4.66699 5.66699 4.66699H6.66699ZM11.333 2.33301C11.8852 2.33301 12.3328 2.78087 12.333 3.33301V9.66699C12.3328 10.2191 11.8852 10.667 11.333 10.667H10.333C9.78098 10.6668 9.33318 10.219 9.33301 9.66699V3.33301C9.33318 2.78098 9.78098 2.33318 10.333 2.33301H11.333ZM16 0C16.5523 0 17 0.447715 17 1V9.66699C16.9998 10.2191 16.5522 10.667 16 10.667H15C14.4478 10.667 14.0002 10.2191 14 9.66699V1C14 0.447715 14.4477 0 15 0H16Z"/>
          </svg>
          {/* WiFi */}
          <svg width="16" height="11" viewBox="0 0 16 11" fill="none" className="fill-loan-text">
            <path d="M5.42676 8.40057C6.70233 7.32168 8.57111 7.32168 9.84668 8.40057C9.9107 8.45859 9.94745 8.54074 9.94922 8.62713C9.95095 8.71359 9.91719 8.79702 9.85547 8.8576L7.8584 10.8732C7.79987 10.9324 7.71997 10.966 7.63672 10.966C7.55346 10.966 7.47358 10.9324 7.41504 10.8732L5.41699 8.8576C5.35539 8.797 5.32147 8.71351 5.32324 8.62713C5.32507 8.54068 5.36262 8.45855 5.42676 8.40057ZM2.76172 5.71111C5.50981 3.15507 9.76555 3.15512 12.5137 5.71111C12.5756 5.77097 12.6113 5.85351 12.6123 5.93963C12.6132 6.02581 12.5793 6.10892 12.5186 6.1701L11.3643 7.33709C11.2453 7.45619 11.0527 7.45885 10.9307 7.34295C10.0282 6.52577 8.85417 6.07337 7.63672 6.07342C6.42003 6.07392 5.2466 6.52628 4.34473 7.34295C4.22265 7.45877 4.03007 7.45617 3.91113 7.33709L2.75684 6.1701C2.69617 6.10903 2.66227 6.02572 2.66309 5.93963C2.66402 5.8535 2.69975 5.77095 2.76172 5.71111ZM0.0966797 3.02947C4.3118 -1.0097 10.9618 -1.00995 15.1768 3.02947C15.2377 3.08942 15.2719 3.17156 15.2725 3.25701C15.273 3.34257 15.239 3.42481 15.1787 3.48553L14.0225 4.65252C13.9033 4.772 13.7107 4.77324 13.5898 4.65545C11.9839 3.12872 9.85254 2.27765 7.63672 2.27752C5.42062 2.27751 3.28877 3.12856 1.68262 4.65545C1.56183 4.77344 1.36905 4.77222 1.25 4.65252L0.09375 3.48553C0.0334857 3.42476 -0.000563029 3.34259 0 3.25701C0.00061595 3.1715 0.0356689 3.08939 0.0966797 3.02947Z"/>
          </svg>
          {/* Battery */}
          <div className="relative w-6 h-3">
            <div className="w-[22px] h-[11px] rounded-[2.667px] border border-loan-text opacity-35"></div>
            <svg width="2" height="4" viewBox="0 0 2 4" className="fill-loan-text opacity-40 absolute right-0 top-[4px]">
              <path d="M0 0V4C0.804731 3.66122 1.32804 2.87313 1.32804 2C1.32804 1.12687 0.804731 0.338777 0 0Z"/>
            </svg>
            <div className="absolute left-[2px] top-[2px] w-[18px] h-[7px] rounded-[1.333px] bg-loan-text"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-center relative px-4 py-4">
        <button className="absolute left-4" onClick={() => router.push("/additional-details")}>
          <ChevronLeft size={24} className="stroke-[#020617] stroke-2" />
        </button>
        <h1 className="text-lg font-bold text-loan-text">Living expenses</h1>
      </div>

      {/* Main Content */}
      <div className="px-4 pb-6 max-w-md mx-auto">
        {/* Step Indicator */}
        <div className="mb-6">
          <p className="text-sm mb-1">
            <span className="text-loan-green font-normal">5</span>
            <span className="text-black/50 font-normal"> of 5 steps completed</span>
          </p>
          <div className="flex items-center justify-center gap-[7.2px]">
            {/* Steps 1-4 - All Completed */}
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center gap-[7.2px]">
                <div className="w-7 h-7 flex-shrink-0">
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path d="M9.53977 16.2371L17.4767 8.30019L16.2326 7.05609L9.53977 13.7489L6.17519 10.3843L4.93109 11.6284L9.53977 16.2371ZM11.2172 22.4305C9.66605 22.4305 8.20803 22.1361 6.84315 21.5474C5.47825 20.9587 4.29099 20.1598 3.28135 19.1506C2.2717 18.1414 1.4724 16.9547 0.883439 15.5904C0.29448 14.2261 0 12.7684 0 11.2172C0 9.66605 0.294352 8.20803 0.883056 6.84315C1.47176 5.47825 2.2707 4.29099 3.27988 3.28136C4.28908 2.27171 5.47582 1.4724 6.84011 0.883441C8.20438 0.294481 9.6621 0 11.2133 0C12.7644 0 14.2225 0.294353 15.5873 0.883057C16.9522 1.47176 18.1395 2.2707 19.1491 3.27988C20.1588 4.28908 20.9581 5.47582 21.5471 6.84011C22.136 8.20438 22.4305 9.6621 22.4305 11.2133C22.4305 12.7644 22.1361 14.2225 21.5474 15.5873C20.9587 16.9522 20.1598 18.1395 19.1506 19.1491C18.1414 20.1588 16.9547 20.9581 15.5904 21.5471C14.2261 22.136 12.7684 22.4305 11.2172 22.4305Z" fill="#46CB86"/>
                  </svg>
                </div>
                <div className="flex items-center gap-[4.722px]">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-[5px] h-[5px] rounded-full bg-loan-green"></div>
                  ))}
                </div>
              </div>
            ))}

            {/* Step 5 - Current (shown as incomplete circle with number) */}
            <div className="w-7 h-7 rounded-full border border-[#D9D9D9] flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-normal text-black/80 font-[var(--font-roboto)]">5</span>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-[18px]">
          {/* Net Income */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-loan-text">Net income (After Tax)*</label>
            <div className="flex gap-2.5">
              <Input
                type="number"
                placeholder="$0"
                value={formData.netIncome.amount}
                onChange={(e) => handleAmountChange("netIncome", e.target.value)}
                className="flex-1 h-auto py-2.5 px-3.5 rounded-lg border-loan-border shadow-sm placeholder:text-loan-gray text-[13px]"
              />
              <Select
                value={formData.netIncome.frequency}
                onValueChange={(value: FrequencyType) => handleFrequencyChange("netIncome", value)}
              >
                <SelectTrigger className="w-[115px] h-auto py-2.5 px-3.5 rounded-lg border-loan-border shadow-sm text-loan-gray text-[13px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="fortnightly">Fortnightly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Section Header */}
          <h2 className="text-base font-bold text-loan-text">Your living expenses</h2>

          {/* Rent/Mortgage */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-loan-text">Rent/Mortgage*</label>
            <div className="flex gap-2.5">
              <Input
                type="number"
                placeholder="$0"
                value={formData.rentMortgage.amount}
                onChange={(e) => handleAmountChange("rentMortgage", e.target.value)}
                className="flex-1 h-auto py-2.5 px-3.5 rounded-lg border-loan-border shadow-sm placeholder:text-loan-gray text-[13px]"
              />
              <Select
                value={formData.rentMortgage.frequency}
                onValueChange={(value: FrequencyType) => handleFrequencyChange("rentMortgage", value)}
              >
                <SelectTrigger className="w-[115px] h-auto py-2.5 px-3.5 rounded-lg border-loan-border shadow-sm text-loan-gray text-[13px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="fortnightly">Fortnightly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Utilities */}
          <div className="flex flex-col gap-1.5">
            <div>
              <label className="text-sm font-semibold text-loan-text block">Utilities*</label>
              <p className="text-[13px] text-loan-gray">e.g. electricity and gas</p>
            </div>
            <div className="flex gap-2.5">
              <Input
                type="number"
                placeholder="$0"
                value={formData.utilities.amount}
                onChange={(e) => handleAmountChange("utilities", e.target.value)}
                className="flex-1 h-auto py-2.5 px-3.5 rounded-lg border-loan-border shadow-sm placeholder:text-loan-gray text-[13px]"
              />
              <Select
                value={formData.utilities.frequency}
                onValueChange={(value: FrequencyType) => handleFrequencyChange("utilities", value)}
              >
                <SelectTrigger className="w-[115px] h-auto py-2.5 px-3.5 rounded-lg border-loan-border shadow-sm text-loan-gray text-[13px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="fortnightly">Fortnightly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Groceries */}
          <div className="flex flex-col gap-1.5">
            <div>
              <label className="text-sm font-semibold text-loan-text block">Groceries*</label>
              <p className="text-[13px] text-loan-gray">e.g. Lorem ipsum</p>
            </div>
            <div className="flex gap-2.5">
              <Input
                type="number"
                placeholder="$0"
                value={formData.groceries.amount}
                onChange={(e) => handleAmountChange("groceries", e.target.value)}
                className="flex-1 h-auto py-2.5 px-3.5 rounded-lg border-loan-border shadow-sm placeholder:text-loan-gray text-[13px]"
              />
              <Select
                value={formData.groceries.frequency}
                onValueChange={(value: FrequencyType) => handleFrequencyChange("groceries", value)}
              >
                <SelectTrigger className="w-[115px] h-auto py-2.5 px-3.5 rounded-lg border-loan-border shadow-sm text-loan-gray text-[13px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="fortnightly">Fortnightly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Transport */}
          <div className="flex flex-col gap-1.5">
            <div>
              <label className="text-sm font-semibold text-loan-text block">Transport*</label>
              <p className="text-[13px] text-loan-gray">e.g. fuel, public transport, rego</p>
            </div>
            <div className="flex gap-2.5">
              <Input
                type="number"
                placeholder="$0"
                value={formData.transport.amount}
                onChange={(e) => handleAmountChange("transport", e.target.value)}
                className="flex-1 h-auto py-2.5 px-3.5 rounded-lg border-loan-border shadow-sm placeholder:text-loan-gray text-[13px]"
              />
              <Select
                value={formData.transport.frequency}
                onValueChange={(value: FrequencyType) => handleFrequencyChange("transport", value)}
              >
                <SelectTrigger className="w-[115px] h-auto py-2.5 px-3.5 rounded-lg border-loan-border shadow-sm text-loan-gray text-[13px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="fortnightly">Fortnightly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Recreation */}
          <div className="flex flex-col gap-1.5">
            <div>
              <label className="text-sm font-semibold text-loan-text block">Recreation*</label>
              <p className="text-[13px] text-loan-gray">e.g. entertainment and hobbies</p>
            </div>
            <div className="flex gap-2.5">
              <Input
                type="number"
                placeholder="$0"
                value={formData.recreation.amount}
                onChange={(e) => handleAmountChange("recreation", e.target.value)}
                className="flex-1 h-auto py-2.5 px-3.5 rounded-lg border-loan-border shadow-sm placeholder:text-loan-gray text-[13px]"
              />
              <Select
                value={formData.recreation.frequency}
                onValueChange={(value: FrequencyType) => handleFrequencyChange("recreation", value)}
              >
                <SelectTrigger className="w-[115px] h-auto py-2.5 px-3.5 rounded-lg border-loan-border shadow-sm text-loan-gray text-[13px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="fortnightly">Fortnightly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Insurances */}
          <div className="flex flex-col gap-1.5">
            <div>
              <label className="text-sm font-semibold text-loan-text block">Insurances*</label>
              <p className="text-[13px] text-loan-gray">e.g. health, car and/or pet insurance</p>
            </div>
            <div className="flex gap-2.5">
              <Input
                type="number"
                placeholder="$0"
                value={formData.insurances.amount}
                onChange={(e) => handleAmountChange("insurances", e.target.value)}
                className="flex-1 h-auto py-2.5 px-3.5 rounded-lg border-loan-border shadow-sm placeholder:text-loan-gray text-[13px]"
              />
              <Select
                value={formData.insurances.frequency}
                onValueChange={(value: FrequencyType) => handleFrequencyChange("insurances", value)}
              >
                <SelectTrigger className="w-[115px] h-auto py-2.5 px-3.5 rounded-lg border-loan-border shadow-sm text-loan-gray text-[13px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="fortnightly">Fortnightly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Clothing and personal */}
          <div className="flex flex-col gap-1.5">
            <div>
              <label className="text-sm font-semibold text-loan-text block">Clothing and personal*</label>
              <p className="text-[13px] text-loan-gray">e.g. clothes and make up</p>
            </div>
            <div className="flex gap-2.5">
              <Input
                type="number"
                placeholder="$0"
                value={formData.clothingPersonal.amount}
                onChange={(e) => handleAmountChange("clothingPersonal", e.target.value)}
                className="flex-1 h-auto py-2.5 px-3.5 rounded-lg border-loan-border shadow-sm placeholder:text-loan-gray text-[13px]"
              />
              <Select
                value={formData.clothingPersonal.frequency}
                onValueChange={(value: FrequencyType) => handleFrequencyChange("clothingPersonal", value)}
              >
                <SelectTrigger className="w-[115px] h-auto py-2.5 px-3.5 rounded-lg border-loan-border shadow-sm text-loan-gray text-[13px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="fortnightly">Fortnightly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Others */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-loan-text">Others*</label>
            <div className="flex gap-2.5">
              <Input
                type="number"
                placeholder="$0"
                value={formData.others.amount}
                onChange={(e) => handleAmountChange("others", e.target.value)}
                className="flex-1 h-auto py-2.5 px-3.5 rounded-lg border-loan-border shadow-sm placeholder:text-loan-gray text-[13px]"
              />
              <Select
                value={formData.others.frequency}
                onValueChange={(value: FrequencyType) => handleFrequencyChange("others", value)}
              >
                <SelectTrigger className="w-[115px] h-auto py-2.5 px-3.5 rounded-lg border-loan-border shadow-sm text-loan-gray text-[13px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="fortnightly">Fortnightly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-[#EDF2FF] rounded-[10px] p-4">
            <p className="text-[13px] leading-[22px] text-loan-gray-light">
              Please ensure all expense fields are completed. If an expense is $0, please enter 0.
            </p>
          </div>

          {/* Continue Button */}
          <Button className="w-full h-12 bg-loan-blue hover:bg-loan-blue/90 text-white text-base font-bold rounded-xl">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}

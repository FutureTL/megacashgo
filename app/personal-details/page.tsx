"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PersonalDetails() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dob: "",
    homeAddress: "",
    mobileNumber: "",
    email: "",
    reEnterEmail: "",
    agreedToTerms: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
        <button className="absolute left-4" onClick={() => router.push("/")}>
          <ChevronLeft size={24} className="stroke-[#020617] stroke-2" />
        </button>
        <h1 className="text-lg font-bold text-loan-text font-[var(--font-lato)]">Personal Details</h1>
      </div>

      {/* Main Content */}
      <div className="px-4 pb-6 max-w-md mx-auto">
        {/* Step Indicator */}
        <div className="mb-6">
          <p className="text-sm mb-1 font-[var(--font-lato)]">
            <span className="text-loan-green font-normal">2</span>
            <span className="text-black/50 font-normal"> of 5 steps completed</span>
          </p>
          <div className="flex items-center justify-center gap-[7.2px]">
            {/* Step 1 - Completed */}
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

            {/* Step 2 - Completed */}
            <div className="w-7 h-7 flex-shrink-0">
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
                <path d="M9.53977 16.2371L17.4767 8.30019L16.2326 7.05609L9.53977 13.7489L6.17519 10.3843L4.93109 11.6284L9.53977 16.2371ZM11.2172 22.4305C9.66605 22.4305 8.20803 22.1361 6.84315 21.5474C5.47825 20.9587 4.29099 20.1598 3.28135 19.1506C2.2717 18.1414 1.4724 16.9547 0.883439 15.5904C0.29448 14.2261 0 12.7684 0 11.2172C0 9.66605 0.294352 8.20803 0.883056 6.84315C1.47176 5.47825 2.2707 4.29099 3.27988 3.28136C4.28908 2.27171 5.47582 1.4724 6.84011 0.883441C8.20438 0.294481 9.6621 0 11.2133 0C12.7644 0 14.2225 0.294353 15.5873 0.883057C16.9522 1.47176 18.1395 2.2707 19.1491 3.27988C20.1588 4.28908 20.9581 5.47582 21.5471 6.84011C22.136 8.20438 22.4305 9.6621 22.4305 11.2133C22.4305 12.7644 22.1361 14.2225 21.5474 15.5873C20.9587 16.9522 20.1598 18.1395 19.1506 19.1491C18.1414 20.1588 16.9547 20.9581 15.5904 21.5471C14.2261 22.136 12.7684 22.4305 11.2172 22.4305Z" fill="#46CB86"/>
              </svg>
            </div>

            <div className="flex items-center gap-[4.722px]">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-[5px] h-[5px] rounded-full bg-gray-200"></div>
              ))}
            </div>

            {/* Step 3 */}
            <div className="w-7 h-7 rounded-full border border-[#D9D9D9] flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-normal text-black/80 font-[var(--font-roboto)]">3</span>
            </div>

            <div className="flex items-center gap-[4.722px]">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-[5px] h-[5px] rounded-full bg-gray-200"></div>
              ))}
            </div>

            {/* Step 4 */}
            <div className="w-7 h-7 rounded-full border border-[#D9D9D9] flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-normal text-black/80 font-[var(--font-roboto)]">4</span>
            </div>

            <div className="flex items-center gap-[4.722px]">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-[5px] h-[5px] rounded-full bg-gray-200"></div>
              ))}
            </div>

            {/* Step 5 */}
            <div className="w-7 h-7 rounded-full border border-[#D9D9D9] flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-normal text-black/80 font-[var(--font-roboto)]">5</span>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-loan-text mb-1.5 block">First name*</label>
            <Input
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="h-12 rounded-lg border-loan-border shadow-sm placeholder:text-[#999] text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-loan-text mb-1.5 block">Middle name (optional)</label>
            <Input
              placeholder="Enter middle name"
              value={formData.middleName}
              onChange={(e) => handleInputChange("middleName", e.target.value)}
              className="h-12 rounded-lg border-loan-border shadow-sm placeholder:text-[#999] text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-loan-text mb-1.5 block">Last name*</label>
            <Input
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="h-12 rounded-lg border-loan-border shadow-sm placeholder:text-[#999] text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-loan-text mb-1.5 block">Gender*</label>
            <Select onValueChange={(value) => handleInputChange("gender", value)}>
              <SelectTrigger className="h-12 rounded-lg border-loan-border shadow-sm text-sm text-[#666]">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-semibold text-loan-text mb-1.5 block">Date of birth*</label>
            <Select onValueChange={(value) => handleInputChange("dob", value)}>
              <SelectTrigger className="h-12 rounded-lg border-loan-border shadow-sm text-sm text-[#666]">
                <SelectValue placeholder="DD/MM/YYYY" />
              </SelectTrigger>
              <SelectContent>
                <div className="p-2 text-center text-xs text-muted-foreground">Date picker would go here</div>
                <SelectItem value="mock">01/01/1990</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-semibold text-loan-text mb-1.5 block">Home address*</label>
            <Input
              placeholder="Enter Home address"
              value={formData.homeAddress}
              onChange={(e) => handleInputChange("homeAddress", e.target.value)}
              className="h-12 rounded-lg border-loan-border shadow-sm placeholder:text-[#999] text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-loan-text mb-1.5 block">Mobile number*</label>
            <Input
              placeholder="Enter address"
              value={formData.mobileNumber}
              onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
              className="h-12 rounded-lg border-loan-border shadow-sm placeholder:text-[#999] text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-loan-text mb-1.5 block">Email address*</label>
            <Input
              placeholder="Enter email address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="h-12 rounded-lg border-loan-border shadow-sm placeholder:text-[#999] text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-loan-text mb-1.5 block">Re-enter Email address*</label>
            <Input
              placeholder="Confirm your email"
              value={formData.reEnterEmail}
              onChange={(e) => handleInputChange("reEnterEmail", e.target.value)}
              className="h-12 rounded-lg border-loan-border shadow-sm placeholder:text-[#999] text-sm"
            />
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mt-6 mb-8 bg-[#EEF2FF] rounded-[10px] p-4 flex items-start gap-3">
          <Checkbox
            id="terms"
            checked={formData.agreedToTerms}
            onCheckedChange={(checked) => handleInputChange("agreedToTerms", checked === true)}
            className="mt-1 w-5 h-5 rounded border-[#D0D5DD] bg-white data-[state=checked]:bg-loan-blue data-[state=checked]:border-loan-blue"
          />
          <label htmlFor="terms" className="text-[13px] leading-[20px] text-loan-gray-dark font-medium cursor-pointer">
            I have read, Understand and agree to the <span className="text-loan-text font-semibold underline underline-offset-2">terms of the Privacy Policy, Terms & Conditions and Credit Guide</span>
          </label>
        </div>

        {/* Continue Button */}
        <Button className="w-full h-12 bg-loan-blue hover:bg-loan-blue/90 text-white text-base font-bold rounded-xl shadow-md transition-all active:scale-[0.98]">
          Continue
        </Button>
      </div>
    </div>
  );
}

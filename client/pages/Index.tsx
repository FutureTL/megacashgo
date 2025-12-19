import { useState } from "react";
import { ChevronLeft, Check, Minus, Plus } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Index() {
  const [loanAmount, setLoanAmount] = useState(1650);
  const [duration, setDuration] = useState(13);
  const [frequency, setFrequency] = useState<"weekly" | "fortnightly" | "monthly">("weekly");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [isAustralian, setIsAustralian] = useState(true);
  const [isOver18, setIsOver18] = useState(false);
  const [earnsEnough, setEarnsEnough] = useState(false);

  const minLoanAmount = 500;
  const maxLoanAmount = 5000;
  const minDuration = 3;
  const maxDuration = 24;

  const establishmentFee = 100;
  const monthlyFee = 10;
  const principal = 2650;
  const totalFeesPayable = 220;
  const totalAmountPayable = 2870;

  const incrementLoanAmount = () => {
    if (loanAmount < maxLoanAmount) {
      setLoanAmount(Math.min(loanAmount + 50, maxLoanAmount));
    }
  };

  const decrementLoanAmount = () => {
    if (loanAmount > minLoanAmount) {
      setLoanAmount(Math.max(loanAmount - 50, minLoanAmount));
    }
  };

  return (
    <div className="min-h-screen bg-white font-[Lato]">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-7 py-5 h-14 font-[Poppins]">
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
        <button className="absolute left-4">
          <ChevronLeft size={24} className="stroke-[#020617] stroke-2" />
        </button>
        <h1 className="text-lg font-bold text-loan-text">Apply for a Loan</h1>
      </div>

      {/* Main Content */}
      <div className="px-4 pb-6 max-w-md mx-auto">
        {/* Step Indicator */}
        <div className="mb-6">
          <p className="text-sm mb-1">
            <span className="text-loan-green font-normal">1</span>
            <span className="text-black/50 font-normal"> of 5 steps completed</span>
          </p>
          <div className="flex items-center justify-center gap-[7.2px]">
            {/* Step 1 - Completed */}
            <div className="w-7 h-7 flex-shrink-0">
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
                <path d="M9.53977 16.2371L17.4767 8.30019L16.2326 7.05609L9.53977 13.7489L6.17519 10.3843L4.93109 11.6284L9.53977 16.2371ZM11.2172 22.4305C9.66605 22.4305 8.20803 22.1361 6.84315 21.5474C5.47825 20.9587 4.29099 20.1598 3.28135 19.1506C2.2717 18.1414 1.4724 16.9547 0.883439 15.5904C0.29448 14.2261 0 12.7684 0 11.2172C0 9.66605 0.294352 8.20803 0.883056 6.84315C1.47176 5.47825 2.2707 4.29099 3.27988 3.28136C4.28908 2.27171 5.47582 1.4724 6.84011 0.883441C8.20438 0.294481 9.6621 0 11.2133 0C12.7644 0 14.2225 0.294353 15.5873 0.883057C16.9522 1.47176 18.1395 2.2707 19.1491 3.27988C20.1588 4.28908 20.9581 5.47582 21.5471 6.84011C22.136 8.20438 22.4305 9.6621 22.4305 11.2133C22.4305 12.7644 22.1361 14.2225 21.5474 15.5873C20.9587 16.9522 20.1598 18.1395 19.1506 19.1491C18.1414 20.1588 16.9547 20.9581 15.5904 21.5471C14.2261 22.136 12.7684 22.4305 11.2172 22.4305Z" fill="#46CB86"/>
              </svg>
            </div>

            {/* Dots between steps */}
            <div className="flex items-center gap-[4.722px]">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-[5px] h-[5px] rounded-full bg-gray-300"></div>
              ))}
            </div>

            {/* Step 2 */}
            <div className="w-7 h-7 rounded-full border border-[#D9D9D9] flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-normal text-black/80 font-[Roboto]">2</span>
            </div>

            <div className="flex items-center gap-[4.722px]">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-[5px] h-[5px] rounded-full bg-gray-300"></div>
              ))}
            </div>

            {/* Step 3 */}
            <div className="w-7 h-7 rounded-full border border-[#D9D9D9] flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-normal text-black/80 font-[Roboto]">3</span>
            </div>

            <div className="flex items-center gap-[4.722px]">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-[5px] h-[5px] rounded-full bg-gray-300"></div>
              ))}
            </div>

            {/* Step 4 */}
            <div className="w-7 h-7 rounded-full border border-[#D9D9D9] flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-normal text-black/80 font-[Roboto]">4</span>
            </div>

            <div className="flex items-center gap-[4.722px]">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-[5px] h-[5px] rounded-full bg-gray-300"></div>
              ))}
            </div>

            {/* Step 5 */}
            <div className="w-7 h-7 rounded-full border border-[#D9D9D9] flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-normal text-black/80 font-[Roboto]">5</span>
            </div>
          </div>
        </div>

        {/* Loan Amount */}
        <div className="mb-[18px]">
          <div className="flex justify-between items-center mb-[6px]">
            <label className="text-sm font-semibold text-loan-text">Loan amount</label>
            <span className="text-sm font-semibold text-loan-blue">${loanAmount.toFixed(2)}</span>
          </div>
          <div className="relative">
            <Slider
              value={[loanAmount]}
              onValueChange={(value) => setLoanAmount(value[0])}
              min={minLoanAmount}
              max={maxLoanAmount}
              step={50}
              className="mb-2"
            />
            <div className="flex items-center gap-[5px] absolute right-0 -top-1">
              <button
                onClick={decrementLoanAmount}
                className="w-6 h-6 rounded-full bg-white border border-loan-border shadow-sm flex items-center justify-center hover:bg-gray-50"
              >
                <Minus size={16} className="stroke-[#787878] stroke-2" />
              </button>
              <button
                onClick={incrementLoanAmount}
                className="w-6 h-6 rounded-full bg-white border border-loan-green shadow-sm flex items-center justify-center hover:bg-gray-50"
              >
                <Plus size={16} className="stroke-loan-green stroke-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Duration */}
        <div className="mb-[18px]">
          <div className="flex justify-between items-center mb-[6px]">
            <label className="text-sm font-semibold text-loan-text">Duration</label>
            <span className="text-sm font-semibold text-loan-blue">{duration} months</span>
          </div>
          <Slider
            value={[duration]}
            onValueChange={(value) => setDuration(value[0])}
            min={minDuration}
            max={maxDuration}
            step={1}
          />
        </div>

        {/* Repayment Frequency */}
        <div className="mb-[18px]">
          <label className="text-sm font-semibold text-loan-text mb-[6px] block">Repayment frequency</label>
          <div className="flex gap-0 rounded-full bg-gray-100 p-1">
            <button
              onClick={() => setFrequency("weekly")}
              className={`flex-1 py-2 px-4 rounded-full text-[13px] font-normal transition-colors ${
                frequency === "weekly"
                  ? "bg-loan-blue text-white"
                  : "bg-transparent text-loan-text"
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setFrequency("fortnightly")}
              className={`flex-1 py-2 px-4 rounded-full text-[13px] font-normal transition-colors ${
                frequency === "fortnightly"
                  ? "bg-loan-blue text-white"
                  : "bg-transparent text-loan-text"
              }`}
            >
              Fortnightly
            </button>
            <button
              onClick={() => setFrequency("monthly")}
              className={`flex-1 py-2 px-4 rounded-full text-[13px] font-normal transition-colors ${
                frequency === "monthly"
                  ? "bg-loan-blue text-white"
                  : "bg-transparent text-loan-text"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Total Cost Breakdown */}
        <div className="mb-[18px] rounded-[10px] border border-loan-border-light overflow-hidden">
          <div className="px-4 py-3 border-b border-loan-border-light">
            <h3 className="text-base font-semibold text-loan-text">Total cost breakdown</h3>
          </div>
          <div className="px-4 py-3 space-y-2">
            <div className="flex justify-between items-start">
              <span className="text-[13px] text-loan-gray font-normal leading-6">Principal</span>
              <span className="text-[13px] text-loan-gray font-normal leading-6">${principal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-[13px] text-loan-gray font-normal leading-6">Establishment Fee</span>
              <span className="text-[13px] text-loan-gray font-normal leading-6">${establishmentFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-[13px] text-loan-gray font-normal leading-6">Monthly Fee</span>
              <span className="text-[13px] text-loan-gray font-normal leading-6">$10.00 × 12 months</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-[13px] text-loan-gray font-normal leading-6">Total Fees Payable</span>
              <span className="text-[13px] text-loan-gray font-normal leading-6">${totalFeesPayable.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-start pt-2 border-t border-loan-border-light">
              <span className="text-base font-semibold text-loan-text">Total Amount Payable</span>
              <span className="text-base font-semibold text-loan-text">${totalAmountPayable.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Loan Purpose */}
        <div className="mb-[18px]">
          <label className="text-sm font-semibold text-loan-text mb-[6px] block">Loan purpose</label>
          <Select value={loanPurpose} onValueChange={setLoanPurpose}>
            <SelectTrigger className="w-full h-auto py-2 px-3 rounded-lg border border-loan-border shadow-sm">
              <SelectValue placeholder="Select a purpose" className="text-[13px] text-loan-gray" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="personal">Personal expenses</SelectItem>
              <SelectItem value="medical">Medical expenses</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="home">Home improvement</SelectItem>
              <SelectItem value="car">Car repair</SelectItem>
              <SelectItem value="debt">Debt consolidation</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Our Criteria */}
        <div className="mb-[18px]">
          <label className="text-sm font-semibold text-loan-text mb-3 block">Our Criteria</label>
          <div className="space-y-[10px]">
            <div className="flex items-center gap-2">
              <Checkbox
                id="australian"
                checked={isAustralian}
                onCheckedChange={(checked) => setIsAustralian(checked === true)}
                className="w-4 h-4 rounded border-loan-blue data-[state=checked]:bg-loan-blue/10 data-[state=checked]:border-loan-blue"
              />
              <label
                htmlFor="australian"
                className="text-sm font-semibold text-loan-gray-dark cursor-pointer"
              >
                I am Australian resident or citizen
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="age"
                checked={isOver18}
                onCheckedChange={(checked) => setIsOver18(checked === true)}
                className="w-4 h-4 rounded border-loan-border data-[state=checked]:bg-loan-blue/10 data-[state=checked]:border-loan-blue"
              />
              <label
                htmlFor="age"
                className="text-sm font-semibold text-loan-gray-dark cursor-pointer"
              >
                I am over 18 years of Age
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="income"
                checked={earnsEnough}
                onCheckedChange={(checked) => setEarnsEnough(checked === true)}
                className="w-4 h-4 rounded border-loan-border data-[state=checked]:bg-loan-blue/10 data-[state=checked]:border-loan-blue"
              />
              <label
                htmlFor="income"
                className="text-sm font-semibold text-loan-gray-dark cursor-pointer"
              >
                I earn more than $600 per week (after tax).
              </label>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-[18px] bg-[#F9FAFB] rounded-[10px] p-4">
          <p className="text-[13px] leading-[22px] text-loan-gray-light">
            <span className="font-bold">Disclaimer:</span> This loan is subject to approval. All applications are assessed based on our lending criteria. By continuing, you acknowledge that you have read and understood our terms and conditions. Fees and charges apply. Please ensure you can meet the repayment obligations before applying.
          </p>
        </div>

        {/* Continue Button */}
        <Button className="w-full h-12 bg-loan-blue hover:bg-loan-blue/90 text-white text-base font-bold rounded-xl">
          Continue
        </Button>
      </div>
    </div>
  );
}

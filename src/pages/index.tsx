import { Dashboard } from "@/components/Dashboard";
import { GroupExpenseDetail } from "@/components/GroupExpenseDetails";
import HomeHeader from "@/components/HomeHeader";
import GroupBalances from "@/components/GroupBalances";

export default function Home() {
  return (
    <div className="bg-white flex flex-col justify-center">
      <HomeHeader />
      <div className="w-full flex justify-center">
        <div className="flex w-[960px]">
          <Dashboard />
          <GroupExpenseDetail />
          <GroupBalances/>
        </div>
      </div>
    </div>
  );
}

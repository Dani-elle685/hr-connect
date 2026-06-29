export interface Employee {
  id: string;
  name: string;
  email: string;
  employeeId: string;
  department: string;
  role: string;
  type: "Full-time" | "Contract" | "Intern";
  status: "Active" | "Suspended" | "Resigned";
  avatarInitials?: string;
}

export const employees: Employee[] = [
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    email: "sarah.j@hrconnect.ai",
    employeeId: "EMP-2041",
    department: "Engineering",
    role: "Senior Frontend Lead",
    type: "Full-time",
    status: "Active",
  },
  {
    id: "david-chen",
    name: "David Chen",
    email: "d.chen@hrconnect.ai",
    employeeId: "EMP-1192",
    department: "Product",
    role: "Product Manager",
    type: "Contract",
    status: "Suspended",
  },
  {
    id: "elena-rodriguez",
    name: "Elena Rodriguez",
    email: "elena.r@hrconnect.ai",
    employeeId: "EMP-3045",
    department: "Marketing",
    role: "SEO Specialist",
    type: "Full-time",
    status: "Active",
  },
  {
    id: "marcus-thorne",
    name: "Marcus Thorne",
    email: "m.thorne@hrconnect.ai",
    employeeId: "EMP-0941",
    department: "Legal",
    role: "General Counsel",
    type: "Full-time",
    status: "Resigned",
  },
  {
    id: "jameson-doe",
    name: "Jameson Doe",
    email: "j.doe@hrconnect.ai",
    employeeId: "EMP-4482",
    department: "Sales",
    role: "Account Executive",
    type: "Full-time",
    status: "Active",
    avatarInitials: "JD",
  },
];

export interface LeaveRequest {
  id: string;
  employeeName: string;
  leaveType: string;
  startDate: string;
  endDate: string;
  status: "Pending" | "Approved" | "Rejected" | "Cancelled";
}

export const leaveRequests: LeaveRequest[] = [
  { id: "lr-1", employeeName: "Elena Rodriguez", leaveType: "Annual Leave", startDate: "2023-10-12", endDate: "2023-10-15", status: "Pending" },
  { id: "lr-2", employeeName: "Marcus Chen", leaveType: "Sick Leave", startDate: "2023-10-05", endDate: "2023-10-06", status: "Approved" },
  { id: "lr-3", employeeName: "Sarah Jenkins", leaveType: "Maternity Leave", startDate: "2023-11-01", endDate: "2024-01-30", status: "Cancelled" },
  { id: "lr-4", employeeName: "David Wilson", leaveType: "Annual Leave", startDate: "2023-09-28", endDate: "2023-09-30", status: "Rejected" },
];
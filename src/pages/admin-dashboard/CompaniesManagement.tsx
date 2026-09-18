import { useMemo, useState } from "react";
import { Building2, CheckCircle2, LayoutGrid, List, Plus, Search, Users } from "lucide-react";

import type { Company } from "@/types/admin-company";
import { companies as initialCompanies, companyEmployees } from "@/data/admin-companies";

import { FeatureHeader } from "@/components/admin-dashboard/shared/FeatureHeader";
import { StatCard } from "@/components/admin-dashboard/shared/StatCard";
import { ViewToggle } from "@/components/admin-dashboard/shared/ViewToggle";

import CompanyGridCard from "@/components/admin-dashboard/companies/CompanyGridCard";
import CompanyListRow from "@/components/admin-dashboard/companies/CompanyListRow";
import EmptyCompanies from "@/components/admin-dashboard/companies/EmptyCompanies";
import CompanyFormModal from "@/components/admin-dashboard/companies/CompanyFormModal";
import DeleteCompanyDialog from "@/components/admin-dashboard/companies/DeleteCompanyDialog";
import CompanyDetailDrawer from "@/components/admin-dashboard/companies/CompanyDetailDrawer";

const CompaniesManagement = () => {
  const [companies, setCompanies] = useState(initialCompanies);
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const filteredCompanies = useMemo(
    () =>
      companies.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.industry.toLowerCase().includes(search.toLowerCase()),
      ),
    [companies, search],
  );

  const totalSeats = companies.reduce((sum, c) => sum + c.seatsPurchased, 0);
  const usedSeats = companies.reduce((sum, c) => sum + c.seatsUsed, 0);
  const activeCompanies = companies.filter((c) => c.status === "active").length;

  const handleAdd = () => {
    setSelectedCompany(null);
    setIsFormOpen(true);
  };

  const handleEdit = (company: Company) => {
    setSelectedCompany(company);
    setIsFormOpen(true);
  };

  const handleView = (company: Company) => {
    setSelectedCompany(company);
    setIsDetailOpen(true);
  };

  const handleDelete = (company: Company) => {
    setSelectedCompany(company);
    setIsDeleteOpen(true);
  };

  const handleSave = (company: Company) => {
    setCompanies((prev) =>
      prev.some((item) => item.id === company.id)
        ? prev.map((item) => (item.id === company.id ? company : item))
        : [company, ...prev],
    );
    setIsFormOpen(false);
  };

  const confirmDelete = () => {
    if (!selectedCompany) return;
    setCompanies((prev) => prev.filter((item) => item.id !== selectedCompany.id));
    setIsDeleteOpen(false);
  };

  return (
    <div className="space-y-6">
      <FeatureHeader
        icon={Building2}
        eyebrow="Companies Management"
        title="B2B Company Accounts"
        description="Manage the businesses that buy Thraivio for their employees - seats, billing, and each company's team roster."
        meta={[
          { icon: Building2, label: `${companies.length} Companies` },
          { icon: Users, label: `${usedSeats}/${totalSeats} Seats Used` },
        ]}
        primaryAction={{ label: "Add Company", icon: Plus, onClick: handleAdd }}
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard title="Total Companies" value={companies.length} icon={Building2} />
        <StatCard title="Active Accounts" value={activeCompanies} icon={CheckCircle2} accent="success" />
        <StatCard title="Seats Purchased" value={totalSeats} icon={Users} />
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search companies, industries..."
            className="w-full rounded-xl border border-border bg-background py-2.5 pl-11 pr-4 text-sm outline-none focus:border-primary"
          />
        </div>

        <ViewToggle<"grid" | "list">
          value={view}
          onChange={setView}
          options={[
            { value: "grid", icon: LayoutGrid, label: "Grid" },
            { value: "list", icon: List, label: "List" },
          ]}
        />
      </div>

      {filteredCompanies.length === 0 ? (
        <EmptyCompanies
          hasFilters={search.length > 0}
          onAddCompany={handleAdd}
          onReset={() => setSearch("")}
        />
      ) : view === "grid" ? (
        <div className="grid gap-4 lg:grid-cols-2">
          {filteredCompanies.map((company) => (
            <CompanyGridCard
              key={company.id}
              company={company}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredCompanies.map((company) => (
            <CompanyListRow
              key={company.id}
              company={company}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      <CompanyFormModal
        open={isFormOpen}
        company={selectedCompany}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
      />

      <DeleteCompanyDialog
        open={isDeleteOpen}
        company={selectedCompany}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={confirmDelete}
      />

      <CompanyDetailDrawer
        open={isDetailOpen}
        company={selectedCompany}
        employees={companyEmployees.filter((e) => e.companyId === selectedCompany?.id)}
        onClose={() => setIsDetailOpen(false)}
      />
    </div>
  );
};

export default CompaniesManagement;

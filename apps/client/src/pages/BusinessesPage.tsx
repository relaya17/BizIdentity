import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import BusinessCard from "../components/BusinessCard";
import { useAppSelector } from "../redux/hooks";

interface Business {
  _id: string;
  title: string;
  description: string;
  image: string;
  phone: string;
  address: string;
  likedBy?: string[];
}






const BusinessesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const businesses = useAppSelector((state: { business: { all: unknown[]; }; }) => state.business.all);
  const userRole = useAppSelector((state) => state.auth.user?.role);

  const filtered = businesses.filter((b: { title: string; }) =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {filtered.map((biz: Business) => (
  <BusinessCard key={biz._id} business={biz} userRole={userRole} />
))}

        
      </div>
    </div>
  );
};

export default BusinessesPage;

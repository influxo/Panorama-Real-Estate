"use client";
import { useState } from "react";

interface PropertyFilterProps {
  onFilterChange: (filters: {
    minSize?: number;
    maxSize?: number;
    type?: string;
  }) => void;
}

export default function PropertyFilter({
  onFilterChange,
}: PropertyFilterProps) {
  const [filters, setFilters] = useState({
    minSize: "",
    maxSize: "",
    type: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const newFilters = {
      ...filters,
      [name]: value,
    };
    setFilters(newFilters);
    onFilterChange({
      minSize: newFilters.minSize ? Number(newFilters.minSize) : undefined,
      maxSize: newFilters.maxSize ? Number(newFilters.maxSize) : undefined,
      type: newFilters.type || undefined,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Filter Properties</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="minSize"
              className="block text-sm font-medium text-gray-700"
            >
              Min Size (m²)
            </label>
            <input
              type="number"
              id="minSize"
              name="minSize"
              value={filters.minSize}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary"
              placeholder="Min size"
            />
          </div>
          <div>
            <label
              htmlFor="maxSize"
              className="block text-sm font-medium text-gray-700"
            >
              Max Size (m²)
            </label>
            <input
              type="number"
              id="maxSize"
              name="maxSize"
              value={filters.maxSize}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary"
              placeholder="Max size"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700"
          >
            Property Type
          </label>
          <select
            id="type"
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary"
          >
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="office">Office</option>
          </select>
        </div>
      </div>
    </div>
  );
}

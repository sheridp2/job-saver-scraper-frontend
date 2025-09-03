import React from "react";

export const JobCard = ({ job }) => {
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white max-w-[120px] sm:max-w-xs md:max-w-sm truncate text-sm"
      >
        <h3 className="truncate max-w-[120px] sm:max-w-xs md:max-w-sm text-sm">{job.title}</h3>
        <p className="text-xs">ID: {job.jobId}</p>
      </th>
      <td class="px-2 py-2 max-w-[100px] sm:max-w-xs md:max-w-sm truncate text-sm">{job.company}</td>
      <td class="px-2 py-2 max-w-[120px] sm:max-w-xs md:max-w-sm truncate text-sm">{job.location}</td>
      <td class="px-2 py-2 hidden sm:table-cell">Laptop</td>
      <td class="px-2 py-2 hidden md:table-cell">{job.jobId}</td>
      <td class="px-2 py-2 text-right">
        <a
          href={job.url}
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline text-sm"
        >
          Job Page
        </a>
      </td>
    </tr>
  );
};

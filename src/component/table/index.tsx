import React from 'react';

export const Table = () => {
  
    return (
        <div>
<table className="min-w-full divide-y divide-gray-200">
  <thead className="bg-gray-50">
    <tr>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    <tr>
      <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm font-medium text-gray-900">John Doe</div></td>
      <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-500">johndoe@example.com</div></td>
      <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-500">Admin</div></td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm font-medium text-gray-900">Jane Smith</div></td>
      <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-500">janesmith@example.com</div></td>
      <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-500">User</div></td>
    </tr>
  </tbody>
</table>
        </div>
    );
  };
  
  export default Table;
  
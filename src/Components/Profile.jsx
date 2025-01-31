import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { useState } from 'react';


function Profile(){

  const {current_user,updateUser} = useContext(UserContext)
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    role: current_user?.role || "",
    email: current_user?.email || "",
    name:current_user?.name || "",
  });

    // Handle form input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.role]: e.target.value });
      };

    // Handle profile update
  const handleUpdate = async () => {
    if (updateUser) {
      await updateUser(formData); // Call update function from context
      setEditing(false); // Exit edit mode
    }
  };

  return (
    <>
    { 
    !current_user?("Not authorized")
    :(
    <div className="max-w-4xl mx-auto p-6 bg-gray-600 shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">Profile Page</h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <h3 className="text-xl font-medium text-gray-600">Name</h3>
          {editing ? (
             <input
             type="text"
             role="name"
             value={formData.name}
             onChange={handleChange}
            className="border p-2 rounded"
           />
         ) : (
            // used : if not user display empty 
           <p className="text-gray-800">{ current_user &&current_user.name}</p>
         )} </div>
         
         {/* Email Field */}
         <div className="flex justify-between">
           <h3 className="text-xl font-medium text-gray-600">Email</h3>
           {editing ? (
             <input
               type="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               className="border p-2 rounded"
             />):(
                <p className="text-gray-800">{
                    current_user && current_user.email}</p>
             )}
             </div>

             {/* Role & Admin Status */}
            <div className="flex justify-between">
              <h3 className="text-xl font-medium text-gray-600">Editor</h3>
              <p className={`text-sm font-semibold ${current_user && current_user.role ? "text-cyan-600 border p-3" : "text-orange-600"}`}>
                {current_user && current_user.role ? "Editor" : "Viewer"}
              </p>
            </div>
            <div className="flex justify-between">
              <h3 className="text-xl font-medium text-gray-600">Admin Status</h3>
              <p className={`text-sm font-semibold ${ current_user && current_user.is_admin ? "text-cyan-600" : "text-orange-600 border p-3"}`}>
                {current_user && current_user.is_admin ? "Admin" : "Just a User"}
              </p>
            </div>
          </div>
          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-4">
            {editing ? (
              <>
                <button
                  onClick={handleUpdate}
                  className="px-6 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-cyan-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditing(false)}
                  className="px-6 py-2 bg-gray-400 text-white font-medium rounded-md hover:bg-gray-500"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditing(true)}
                className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
              >
                Update Profile
              </button>
            )}
          </div>
        </div>)}
    </>
  );
}

export default Profile;




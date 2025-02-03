import { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';


function Profile() {
  const { current_user, updateUser } = useContext(UserContext)
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    role: current_user?.role || "",
    email: current_user?.email || "",
    name: current_user?.name || "",
  });

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        !current_user ? ("Not authorized")
          : (
            <div className="max-w-prose  absolute top-0 insert-x-0 p-6  shadow-lg rounded 4xl mt-10 bg-cyan-200">
              <h2 className="text-3xl font-semibold text-gray-700 mb-6"> {current_user.name}</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <h3 className="text-2xl font-semibold text-black">Name</h3>
                  {editing ? (
                    <input
                      type="text"
                      role="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border p-2 rounded-2xl"
                    />
                  ) : (
                    // used no user 
                    <p className="text-black">{current_user && current_user.name}</p>
                  )} </div>

                {/* Email Field */}
                <div className="flex justify-between">
                  <h3 className="text-2xl font-semibold text-black">Email</h3>
                  {editing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.name}
                      onChange={handleChange}
                      className="border p-2 rounded"
                    />) : (
                    <p className="text-gray-800">{
                      current_user && current_user.name}</p>
                  )}
                </div>

                {/* Role & Admin Status */}
                <div className="flex justify-between">
                  <h3 className="text-xl font-medium text-gray-600">Role</h3>
                  {editing ? (
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="border p-2 rounded"
                    >
                      <option value="Editor">Editor</option>
                      <option value="Viewer">Viewer</option>
                    </select>
                  ) : (
                    <p className={`text-sm font-semibold ${current_user?.role ? "text-cyan-600 border p-3" : "text-orange-600"}`}>
                      {current_user?.role ? current_user.role : "Viewer"}
                    </p>
                  )}
                </div>
              </div>
              {/* Admin  */}

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
            </div>
          )}
    </>
  );
}
export default Profile;
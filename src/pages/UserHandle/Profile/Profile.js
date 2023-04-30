import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeafletMap from '../../Others/LeafletMap/LeafletMap';

const Profile = () => {

    const {user,userSignOut} = useContext(AuthContext);

    const handleLogOut= ()=>{
        userSignOut();
    }
    return (
        <>
        <div className="hero min-h-screen bg-base-200 justify-start items-start">
        <div className="hero-content flex-col items-start ">
            <div className="flex items-center">
                 <img src={user?.photoURL} className="w-16 max-w-sm rounded-lg shadow-2xl" />
                 <h1 className=" ms-2 text-xl font-bold">{user?.displayName}</h1>
            </div>
         
          <div>
           
            <p className="py-6"><span className='font-semibold'>E-Mail : </span> {user?.email}</p>
            <button className="btn btn-warning" onClick={handleLogOut}>Log me Out</button>
          </div>
        </div>
      </div>
      <LeafletMap/>
        </>
    );
};

export default Profile;
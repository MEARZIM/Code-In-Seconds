"use client"


import React, { 
    useCallback, 
    useEffect, 
    useState 
} from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';


import useUser from '@/hooks/useUser';
import ImageUpload from '../imageUpload';
import { useParams } from 'next/navigation';
import { Modal } from '@/components/ui/modal';
import { Input } from '@/components/ui/input';
import useEditModal from '@/hooks/useEditModal';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';



const EditModal = () => {
    const params = useParams();
    // console.log(params.id);

    const userData = useUser(params.id as string);
    const currentUser = userData.user.user;

    // console.log(currentUser);

    const editModal = useEditModal();
    const [isLoading, setIsLoading] = useState(false);


    const [profileImage, setProfileImage] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');

    useEffect(() => {
        setProfileImage(currentUser.profileImage)
        setCoverImage(currentUser.coverImage)
        setName(currentUser?.name)
        setUsername(currentUser?.username)
        setBio(currentUser?.bio)
    }, [
        currentUser?.name,
        currentUser?.username,
        currentUser?.bio,
        currentUser?.profileImage,
        currentUser?.coverImage
    ]);

    const handleSubmit: React.FormEventHandler<HTMLFormElement>  = useCallback(async (e) => {
        try {
            e.preventDefault()
            setIsLoading(true);

            await axios.patch('/api/edit', {
                name: name,
                username: username,
                bio: bio,
                profileImage: profileImage,
                coverImage: coverImage
            });
            
            // console.log({ name, username, bio, profileImage, coverImage })

            toast.success('Updated');

            editModal.onClose();
        } catch (error) {
            toast.error('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    }, [editModal, name, username, bio, profileImage, coverImage]);




    return (
        <Modal
            title="Edit Profile"
            description="Edit Your Profile Details"
            isOpen={editModal.isOpen}
            onClose={editModal.onClose}
        >


            <div className="mt-3">

                <div className="flex flex-col pb-4">

                    <div className="">


                        <form onSubmit={handleSubmit}>

                            <div className="flex flex-col gap-4">
                                <ImageUpload
                                    value={profileImage}
                                    disabled={isLoading}
                                    onChange={(image) => setProfileImage(image)}
                                    label="Upload profile image" />
                                <ImageUpload
                                    value={coverImage}
                                    disabled={isLoading}
                                    onChange={(image) => setCoverImage(image)}
                                    label="Upload cover image" />
                                <Input
                                    placeholder="Name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    disabled={isLoading}
                                />
                                <Input
                                    placeholder="Username"
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                    disabled={isLoading}
                                />
                                <Textarea className="w-full mb-3" placeholder="this is my bio!" />
                                <Button className="w-full" type='submit'>Save</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </Modal>
    )
}

export default EditModal

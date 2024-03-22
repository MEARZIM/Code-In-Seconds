import { useCallback, useState } from "react";

import { Modal } from "@/components/ui/modal";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import RichTextEditor from "./RichTextEditor";
import { usePostModal } from "@/hooks/usePostModal";
import toast from "react-hot-toast";
import axios from "axios";



const PostForm = () => {
    const postModal = usePostModal();

    const [category, setCategory] =useState<string>("");
    const [postContent, setPostContent] =useState<string>("");

    const [isLoadings, setIsLoadings] = useState<boolean>(false)

    console.log(category, postContent)
   
    const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback( async (e) => {
        try {
            e.preventDefault();
            setIsLoadings(true);
            
            await axios.post('/api/post',{
                category: category,
                postContent: postContent
            });

            toast.success("Post Created Successfully");
            setPostContent("");
            setCategory("");

        } catch (error) {
            toast.error("Something went wrong")
        } finally{
            setIsLoadings(false);
        }
    },[category, postContent])

    return (
        <Modal
            title="Create Your Post"
            description="Write anything you want.."
            isOpen={postModal.isOpen}
            onClose={postModal.onClose}
        >
            <form onSubmit={onSubmit}>
                <div className="mb-4">
                    <Label htmlFor="category">Category</Label>
                    <Input id="category" type="text" value={category} onChange={(e)=>setCategory(e.target.value)} />
                    
                </div>
                <div className="mb-4">
                    <Label htmlFor="postContent">Post Content</Label>
                    <RichTextEditor
                        name="postContent" // Add name prop if needed
                        value={postContent} // Pass initial value if needed
                        onChange={setPostContent}
                    />
                
                </div>
                <Button type="submit">Post</Button>
            </form>
        </Modal>
    );
};

export default PostForm;

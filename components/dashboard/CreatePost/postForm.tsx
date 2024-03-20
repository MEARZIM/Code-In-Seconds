import { useState } from "react";

import { Modal } from "@/components/ui/modal";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import RichTextEditor from "./RichTextEditor";
import { usePostModal } from "@/hooks/usePostModal";



const PostForm = () => {
    const postModal = usePostModal();

    const [category, setCategory] =useState<string>("");
    const [postContent, setPostContent] =useState<string>("");

    console.log(category, postContent)
   
    const onSubmit = (data: any) => {
        console.log(data);
        postModal.onClose(); // Close the modal after successful submission
    };

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
                <Button type="submit">Submit</Button>
            </form>
        </Modal>
    );
};

export default PostForm;

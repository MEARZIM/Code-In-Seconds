"use client"

import {
    useCallback,
    useMemo
} from "react";
import axios from "axios";
import toast from "react-hot-toast";

import usePost from "./usePost";
import { useCurrentUserThroughSessions } from "./useCurrentUserThroughSessions";


const useLike = ({ postId, userId }: { postId: string, userId?: string }) => {
    const currentUser = useCurrentUserThroughSessions()

    const {
        post,
        mutate
    } = usePost(postId);

    const hasLiked = useMemo(() => {
        const list = post?.likedIds || [];
        return list.includes(currentUser?.id);

    }, [
        currentUser?.id,
        post?.likedIds,
        post,
        currentUser
    ]);
    console.log(hasLiked)

    const toggleLike = useCallback(async () => {

        try {
            let request;
            if (hasLiked) {
                request = () => axios.delete('/api/like', {
                    data: {
                        postId,
                        userId
                    }
                })
                await request();
                toast.success("Like removed!")
            } else {
                request = () => axios.post('/api/like', {
                    data: {
                        postId,
                        userId
                    }
                })
                await request();
                toast.success("Liked!")
            }
            mutate();

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");

        }

    }, [hasLiked, postId, mutate])

    return {
        hasLiked,
        toggleLike,
    }
}

export default useLike;
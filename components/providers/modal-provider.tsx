"use client";

import { CreateServerModal } from "@/components/models/create-server-modal";
import { useEffect, useState } from "react";
import { InviteModal } from "@/components/models/invite-modal";
import { EditServerModal } from "@/components/models/edit-server-modal";
import { MembersModal } from "@/components/models/members-modal";
import { CreateChannelModal } from "@/components/models/create-channel-modal";
import { LeaveServerModal } from "../models/leave-server-modal";
import { DeleteServerModal } from "../models/delete-server-modal";
import { DeleteChannelModal } from "../models/delete-channel-modal";
import { EditChannelModal } from "../models/edit-channel-modal";
import { MessageFileModal } from "../models/message-file-modal";
import { DeleteMessageModal } from "../models/delete-message-modal";

export const ModalProvider = () => {
    const [isMounted, setisMounted] = useState(false);

    useEffect(()=>{
        setisMounted(true);
    },[]);

    if(!isMounted) {
        return null;
    }

    return (
        <>
        <CreateServerModal/>
        <InviteModal/>
        <EditServerModal />
        <MembersModal />
        <CreateChannelModal/>
        <LeaveServerModal />
        <DeleteServerModal />
        <DeleteChannelModal />
        <EditChannelModal />
        <MessageFileModal />
        <DeleteMessageModal />
        </>
    )
}
import React from 'react'
import { initialPofile } from '@/lib/initial-profile'
import {redirect} from 'next/navigation';

import { db } from '@/lib/db';
import { InitialModel } from '@/components/modals/initial-modal';

async function SetupPage() {
    const profile =await initialPofile();
    
    const server=await db.server.findFirst({
        where:{
            members:{
                some:{
                    profileId:profile.id
                }
            }
        }
    })
    if(server){
        return redirect(`/servers/${server.id}`)
    }
  return (
    <InitialModel/>
  )
}

export default SetupPage
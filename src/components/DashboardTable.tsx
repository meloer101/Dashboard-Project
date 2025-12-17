import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/DataTable";
import {columns} from '@/components/Columns'

import { UploadCloudIcon, PlusIcon } from "lucide-react";

import { VENDOR_MOVEMENTS } from "@/constants";

export const DashboardTable = () => {
  return (
    <div className="grid grid-cols-1 lg:border lg:rounded-xl">
      <div className="flex max-md:flex-col justify-between gap-4 md:items-center lg:py-5 lg:px-6 lg:border-b">
        <div className="">
          <div className="flex items-center gap-2">
            <h3 className='text-lg font-semibold'>
                Vendor Movements
            </h3>
            <Badge variant='outline' className='max-lg:hidden'>240 Vendors</Badge>
          </div>
          <p className='text-sm text-muted-foreground'>
            keep track of vemdor and their security ratings
          </p>
        
        
        </div>
        <div className='flex items-center gap-3'>
            <Button variant='outline'>
                <UploadCloudIcon />
                <span>Import</span>
            </Button>

            <Button >
                <PlusIcon />
                <span>Add vendors</span>
            </Button>
        </div>
      </div>
      <DataTable columns={columns} data={VENDOR_MOVEMENTS} />
    </div>
  );
};

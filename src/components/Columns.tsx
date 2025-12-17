import {Button} from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import Avatar from 'react-avatar'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import {Tooltip,TooltipContent,TooltipTrigger} from '@/components/ui/tooltip'

import {ArrowDownIcon,ArrowUpIcon,Edit2Icon,Trash2Icon} from 'lucide-react'

import type { ColumnDef } from "@tanstack/react-table"

type VendorCategories =
 | 'Active'
 | 'Inactive'
 | 'Database access'
 | 'Admin'
 | 'Salesforce'
 | 'Business data'
 | 'Customer data'
 | 'Financials'
 | 'SOC2'
 | 'Legal';

export type Vendor = {
  src:string;
  name:string;
  website:string;
  rating:number;
  ratingGrowthPercent:number;
  lastAssessed:string;
  categories:VendorCategories[];
}

export const columns :ColumnDef<Vendor>[]=[
    {
        accessorKey:'name',
        header:'Vendor'
    },
    {
        accessorKey:'rating',
        header:'Rating'
    },
    {
        accessorKey:'lastAssessed',
        header:'Last assessed'
    },
    {
        accessorKey:'categories',
        header:'Categories'
    },
]
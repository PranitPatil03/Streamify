/* eslint-disable react-refresh/only-export-components */

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { data } from "@/data/data";

export type Stream = {
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
  albumName: string;
  playlist: string;
};

export const columns: ColumnDef<Stream>[] = [
  {
    accessorKey: "userId",
    header: "User ID",
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("userId")}</div>;
    },
  },
  {
    accessorKey: "songName",
    header: ({ column }) => {
      return (
        <Button
          className="text-center font-bold"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Song Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    accessorKey: "artist",
    header: "Artist",
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("artist")}</div>;
    },
  },

  {
    accessorKey: "albumName",
    header: "Album",
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("albumName")}</div>;
    },
  },
  {
    accessorKey: "playlist",
    header: "Playlist",
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("playlist")}</div>;
    },
  },
  {
    accessorKey: "streamCount",
    header: () => <div className="text-center">Stream Count</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("streamCount")}</div>;
    },
  },
  {
    accessorKey: "dateStreamed",
    header: "Date Streamed",
    cell: ({ row }) => {
      return new Date(row.getValue("dateStreamed")).toLocaleString();
    },
  },
];

export function RecentStreams() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: data.recentStreams,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full border p-5 rounded-md bg-white dark:bg-[#09090B]">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Recent Streams</h1>
      </div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter songs..."
          value={
            (table.getColumn("songName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("songName")?.setFilterValue(event.target.value)
          }
          className="w-1/2 md:w-1/3 lg:w-1/4"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border text-center">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-center font-bold"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PDFDownloadLink } from "@react-pdf/renderer";
import DownloadTicket from "./DownloadTicket";
import { HallMovie } from "@/types";
import { hallsData } from "../../prisma/data";

export function TicketConfirm({
  hallData,
  open,
  setOpen,
}: {
  hallData: HallMovie | null;
  open: boolean;
  setOpen: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-base tracking-wide opacity-70">ORDER SUMMARY</DialogTitle>
          <DialogTitle className="text-xl font-bold tracking-wide">{hallData?.movie?.movieName}</DialogTitle>
          <DialogDescription className="text-sm">Hindhi 2D</DialogDescription>
        </DialogHeader>
        <div>
          <div>
            {hallData?.hall?.hallName}, {hallData?.hall?.hallAddress?.city}
          </div>
          <div className="mt-4">
            <div>Seat Number: 1,2</div>
            <div>Mon, 15 Jul, 2024</div>
            <div>10:00 PM</div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">
            <PDFDownloadLink document={<DownloadTicket hallData={hallData} />} fileName="ticket.pdf">
              Download Ticket
            </PDFDownloadLink>
          </Button>
        </DialogFooter>
        <div className="absolute right-10 top-16">
          <h2 className="text-center text-5xl font-semibold text-black">3</h2>
          <p className="text-xl">Tickets</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

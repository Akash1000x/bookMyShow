import { HallMovie } from "@/types";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

export default function DownloadTicket({ hallData }: { hallData: HallMovie | null }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.heading}>
          <Text>ORDER SUMMARY</Text>
        </View>
        <View style={styles.movieName}>
          <Text>{hallData?.movie?.movieName}</Text>
        </View>
        <View style={styles.language}>
          <Text>Hindhi 2D</Text>
        </View>
        <View style={styles.hall}>
          <Text>
            {" "}
            {hallData?.hall?.hallName}, {hallData?.hall?.hallAddress?.city}
          </Text>
        </View>
        <View style={styles.details}>
          <Text>Seat Number: 1,2</Text>
          <Text>Mon, 15 Jul, 2024</Text>
          <Text>10:00 PM</Text>
        </View>
        <view style={styles.ticket}>
          <Text style={{ fontSize: 35, fontWeight: 600 }}>3</Text>
          <Text style={{ fontSize: 16 }}>Tickets</Text>
        </view>
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 50,
  },
  heading: {
    fontSize: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 70,
    borderBottom: "1px solid black",
    marginBottom: 30,
  },
  movieName: {
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: 1,
    marginBottom: 10,
  },
  language: {
    fontSize: 12,
    opacity: 0.6,
    marginBottom: 3,
  },
  hall: {
    fontSize: 13,
    opacity: 0.6,
    marginVertical: 10,
  },
  details: {
    fontSize: 12,
    opacity: 0.6,
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  ticket: {
    position: "absolute",
    right: 150,
    top: 130,
  },
});

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const exportPDF = async () => {

  const report =
    document.getElementById(
      "report-section"
    );

  const canvas =
    await html2canvas(report);

  const image =
    canvas.toDataURL(
      "image/png"
    );

  const pdf = new jsPDF();

  pdf.addImage(
    image,
    "PNG",
    10,
    10,
    190,
    0
  );

  pdf.save(
    "resume-analysis.pdf"
  );
};
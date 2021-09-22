import React from 'react';
import jsPDF from "jspdf";
import "jspdf-autotable";
import {Button} from "@material-ui/core";
import Logo from "../assets/images/PDF_Header.png"

export default function PDF(props) {
    var img = new Image();
    img.src = Logo;

    const exportPDF = () => {
        const unit = "px";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = props.title;
        const headers = [props.headers];

        const bodyData = props.data.map(elt=> Object.values(elt));

        let content = {
            startY: 150,
            head: headers,
            body: bodyData,
            styles: {
                cellPadding: {top: 8, right: 5, bottom: 8, left: 5}
            },
            didDrawPage: function (data) {
                // Header
                if (img) {
                    doc.addImage(img, 'PNG', 0,0 )
                }
                // doc.text('Report', data.settings.margin.left + 50, 22,)
                var str = "TEL : +9411 2696 696/ +9411 269 696\n" +
                    "\n" +
                    "EMAIL : reception@ispirithalei.lk\n" +
                    "\n" +
                    "Website : ispirithalei.herokuapp.com";

                doc.setFontSize(10)

                var pageSize = doc.internal.pageSize
                var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight()
                doc.text(str, data.settings.margin.left, pageHeight - 50)
            },
            margin: {top: 150, bottom: 80},
        };

        doc.setFontSize(20)
        doc.setTextColor(40)
        doc.text(title, marginLeft, 120);
        doc.autoTable(content);
        doc.save("report.pdf")
    }
        return (
            <div>
                <Button variant="contained" color="primary" onClick={ exportPDF }>Generate Report</Button>
            </div>
        );

}
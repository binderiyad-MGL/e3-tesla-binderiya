"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { CAL_NAMESPACE } from "@/lib/cal";

/**
 * Cal.com embed-ийг нэг удаа эхлүүлнэ. Үүний дараа хуудасны аль ч
 * `data-cal-link` элемент дээр дарахад pop-up нээгдэнэ.
 */
export function CalProvider() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return null;
}

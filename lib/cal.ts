export const CAL_NAMESPACE = "webdev20";
export const CAL_LINK = "binderiya-dondov-5wnoh0/webdev20";

/**
 * Энэ props-ыг ямар ч элемент дээр тавихад дарахад Cal.com-ийн
 * цаг захиалах цонх pop-up байдлаар нээгдэнэ.
 */
export const calTriggerProps = {
  "data-cal-namespace": CAL_NAMESPACE,
  "data-cal-link": CAL_LINK,
  "data-cal-config": '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}',
} as const;

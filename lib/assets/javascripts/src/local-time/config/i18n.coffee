import LocalTime from "../local_time"

LocalTime.config.i18n =
  en:
    date:
      dayNames: [
        "الأحد"
        "الاثنين"
        "الثلاثاء"
        "الأربعاء"
        "الخميس"
        "الجمعة"
        "السبت"
      ]
      abbrDayNames: [
        "الأحد"
        "الاثنين"
        "الثلاثاء"
        "الأربعاء"
        "الخميس"
        "الجمعة"
        "السبت"
      ]
      monthNames: [
        "يناير"
        "فبراير"
        "مارس"
        "أبريل"
        "مايو"
        "يونيو"
        "يوليو"
        "أغسطس"
        "سبتمبر"
        "أكتوبر"
        "نوفمبر"
        "ديسمبر"
      ]
      abbrMonthNames: [
        "Jan"
        "Feb"
        "Mar"
        "Apr"
        "May"
        "Jun"
        "Jul"
        "Aug"
        "Sep"
        "Oct"
        "Nov"
        "Dec"
      ]
      yesterday: "البارحة"
      today: "اليوم"
      tomorrow: "غداً"
      on: "يوم {date}"
      formats:
        default: "%b %e, %Y"
        thisYear: "%b %e"
    time:
      am: "صباحاً"
      pm: "مساءً"
      singular: "{time}"
      singularAn: "{time}"
      elapsed: "{time} مضت"
      second: "ثانية"
      seconds: "ثوان"
      minute: "دقيقة"
      minutes: "دقائق"
      hour: "ساعة"
      hours: "ساعات"
      formats:
        default: "%l:%M%P"
        default_24h: "%H:%M"
    datetime:
      at: "{date} في الساعة {time}"
      formats:
        default: "%B %e, %Y في الساعة %l:%M%P %Z"
        default_24h: "%B %e, %Y في الساعة %H:%M %Z"

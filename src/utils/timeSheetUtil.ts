import type { WorkTime } from "@/generate-api";
import { localTimeToDate } from "./dateUtil";

export function calculateWorkDay(startTime: Date, endTime: Date, workTime: WorkTime) {


    let totalWorkingMinutes = 0;

		if (!startTime || !endTime || startTime.getTime() > endTime.getTime()) {

			return totalWorkingMinutes;

		}

		// Calculate morning work minutes
		if (startTime.getTime() < localTimeToDate(workTime.endTimeMorning!)!.getTime()) {
      if (starTime.getTime .isBefore(workTime.getEndTimeMorning())) {

			LocalTime validMorningStart = startTime.isBefore(workTime.getStartTimeMorning())
				? workTime.getStartTimeMorning()
				: startTime;
			LocalTime validMorningEnd = endTime.isAfter(workTime.getEndTimeMorning())
				? workTime.getEndTimeMorning()
				: endTime;

			if (validMorningStart.isBefore(validMorningEnd)) {

				totalWorkingMinutes += minutesBetween(validMorningStart, validMorningEnd);

			}

		}

		// Calculate afternoon work minutes
		if (endTime.isAfter(workTime.getStartTimeAfternoon())) {

			LocalTime validAfternoonStart = startTime.isAfter(workTime.getStartTimeAfternoon())
				? startTime
				: workTime.getStartTimeAfternoon();
			LocalTime validAfternoonEnd = endTime.isAfter(workTime.getEndTimeAfternoon())
				? workTime.getEndTimeAfternoon()
				: endTime;
			// LocalTime validAfternoonEnd = endTime; //NOSONAR

			if (validAfternoonStart.isBefore(validAfternoonEnd)) {

				totalWorkingMinutes += minutesBetween(validAfternoonStart, validAfternoonEnd);

			}

		}

		return totalWorkingMinutes;
}

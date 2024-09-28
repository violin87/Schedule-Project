export default function generateDynamicSlots(slotCount) {
  const morningSlots = [];
  const afternoonSlots = [];
  
  // Define the time blocks
  const startTimeMorning = new Date("2023-01-01 08:30");
  const endTimeMorning = new Date("2023-01-01 11:00");
  const breakStartTime = new Date("2023-01-01 11:00");
  const breakEndTime = new Date("2023-01-01 11:30");
  const startTimeAfternoon = new Date("2023-01-01 11:30");
  const endTimeAfternoon = new Date("2023-01-01 12:30");

  // Calculate the total time in minutes excluding the break
  const totalAvailableTime = ((breakStartTime - startTimeMorning) + (endTimeAfternoon - breakEndTime)) / 60000; // in minutes

  // Calculate the slot duration based on the number of students (slotCount)
  const slotDuration = totalAvailableTime / slotCount;

  // Generate morning slots (before 11:00 AM)
  let currentTime = new Date(startTimeMorning);
  
  for (let i = 0; i < slotCount; i++) {
    let slotEndTime = new Date(currentTime);
    slotEndTime.setMinutes(slotEndTime.getMinutes() + slotDuration);
    
    // Check if the slot end time is during or past the break
    if (slotEndTime > breakStartTime) {
      // Move to the afternoon slot generation
      break;
    }

    // Add the slot to the morningSlots array
    morningSlots.push({
      start: currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      end: slotEndTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    
    // Move the current time to the next slot
    currentTime = slotEndTime;
  }

  // Generate afternoon slots (after the break)
  currentTime = new Date(startTimeAfternoon);
  while (morningSlots.length + afternoonSlots.length < slotCount) {
    let slotEndTime = new Date(currentTime);
    slotEndTime.setMinutes(slotEndTime.getMinutes() + slotDuration);

    // Stop if the end time exceeds 12:30 PM
    if (slotEndTime > endTimeAfternoon) {
      break;
    }

    // Add the slot to the afternoonSlots array
    afternoonSlots.push({
      start: currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      end: slotEndTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    // Move the current time to the next slot
    currentTime = slotEndTime;
  }

  return { morningSlots, afternoonSlots };
}

  
  
  
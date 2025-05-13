import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
import { AgendaList, CalendarProvider, ExpandableCalendar } from "react-native-calendars";
import moment from "moment"; // For handling dates

// Define task type
interface Task {
  time: string;
  title: string;
  teacher?: string;
  color: string;
  image?: any;
  borderColorCode?:string
}

// Sample data
const TASK_DATA: Record<string, Task[]> = {
  "2025-01-28": [
    { time: "09:00 AM", title: "Mathematics", teacher: "Robinson", color: "#B5E4CA", image: require("../../assets/images/Photo1.png"),borderColorCode:'#2A9D8F' },
    { time: "10:00 AM", title: "English", teacher: "Jessi", color: "#FDD2BF", image: require("../../assets/images/Photo2.png"),borderColorCode:'#F6945D' },
    { time: "10:50 AM", title: "Morning Break", color: "#F8C1C1",borderColorCode:'#E23424' },
    { time: "08:30 AM", title: "Physics", teacher: "Albert", color: "rgba(142, 0, 139, 0.13)", image: require("../../assets/images/Photo2.png"),borderColorCode:'#8E008B' },
    { time: "09:45 AM", title: "Chemistry", teacher: "Marie", color: "rgba(0, 115, 204, 0.22)", image: require("../../assets/images/Photo1.png"),borderColorCode:'#0073CC' }
  ],
  "2025-01-27": [
    { time: "08:30 AM", title: "Physics", teacher: "Albert", color: "rgba(142, 0, 139, 0.13)", image: require("../../assets/images/Photo2.png"),borderColorCode:'#8E008B' },
    { time: "09:45 AM", title: "Chemistry", teacher: "Marie", color: "rgba(0, 115, 204, 0.22)", image: require("../../assets/images/Photo1.png"),borderColorCode:'#0073CC' }
  ]
};

// Convert TASK_DATA into AgendaList format
const agendaData = Object.keys(TASK_DATA).map((date) => ({
  title: date,  
  data: TASK_DATA[date] || [] // Ensure data is never undefined
}));


const TimeTable: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>(moment().format("YYYY-MM-DD"));
  const [weekDays, setWeekDays] = useState<{ day: string; date: string }[]>([]);

  // Function to generate the current week's dates dynamically
  const generateWeekDays = (date: string) => {
    const startOfWeek = moment(date).startOf("week"); // Start from Monday
    const weekArray = Array.from({ length: 7 }, (_, i) => ({
      day: startOfWeek.clone().add(i, "days").format("ddd"), // Mon, Tue, Wed, etc.
      date: startOfWeek.clone().add(i, "days").format("YYYY-MM-DD") // Full date
    }));
    setWeekDays(weekArray);
  };

  useEffect(() => {
    generateWeekDays(selectedDate);
  }, [selectedDate]); 

  // 🔥 Filter tasks based on selected date
 // 🔥 Ensure it always has a valid structure
const filteredAgendaData = TASK_DATA[selectedDate] && TASK_DATA[selectedDate].length > 0
? [{ title: selectedDate, data: TASK_DATA[selectedDate] }]
: [{ title: selectedDate, data: [] }]; 

  return (
    <CalendarProvider date={selectedDate} onDateChanged={setSelectedDate}>
      <View style={styles.container}>
        {/* Header */}
        <Text style={styles.header}>Today</Text>

        {/* Selected Date */}
        <Text style={styles.dateText}>{moment(selectedDate).format("dddd, DD MMM YYYY")}</Text>

        {/* Dynamic Horizontal Week Selector */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.weekContainer}>
          {weekDays.map((item) => (
            <TouchableOpacity key={item.date} onPress={() => setSelectedDate(item.date)}>
              <View style={[styles.weekDay, selectedDate === item.date && styles.selectedWeekDay]}>
                <Text style={[styles.weekText, selectedDate === item.date && styles.selectedWeekText]}>
                  {item.day}
                </Text>
                <Text style={[styles.dateNum, selectedDate === item.date && styles.selectedDateNum]}>
                  {moment(item.date).format("DD")}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* 🔥 Show filtered tasks only for selected date */}
        <AgendaList
          sections={filteredAgendaData} // ✅ Updated to use filtered data
          keyExtractor={(item, index) => item.title + index}
          renderItem={({ item }) => (
            item?.title ? (<View style={styles.taskContainer}>
              {/* Timeline Line */}
              <View style={{alignItems:'center'}}>
                <Text style={styles.taskTime}>{item.time}</Text>
                <Text style={styles.taskEndTime}>{item.time}</Text>
                <View style={styles.timelineContainer}>
                  <View style={styles.line} />
                </View>
              </View>

              {/* Task Card */}
              <View style={[styles.taskCard, { backgroundColor: item.color, borderColor: item?.borderColorCode }]}>
                {item.image && <Image source={item.image} style={styles.taskImage} />}
                <View>
                  <Text style={styles.taskTitle}>{item.title}</Text>
                  {item.teacher && <Text style={styles.taskTeacher}>by {item.teacher}</Text>}
                </View>
              </View>
            </View>): (
      <Text style={styles.noTasksText}>No tasks for today</Text> // ✅ Fallback UI
    )
          )}
          renderSectionHeader={() => null} 
          renderSectionFooter={()=>null}
          stickySectionHeadersEnabled={false}
        />
      </View>
    </CalendarProvider>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EFF3FF", padding: 15 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 5 },
  dateText: { fontSize: 16, color: "#666", marginBottom: 15 },

  /* Dynamic Horizontal Week Selector */
  weekContainer: { flexDirection: "row", marginBottom: 15 },
  weekDay: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 15, backgroundColor: "#E0E7FF", marginRight: 10 },
  weekText: { fontSize: 14, color: "#555" },
  dateNum: { fontSize: 16, fontWeight: "bold", color: "#444" },
  selectedWeekDay: { backgroundColor: "#3A86FF" },
  selectedWeekText: { color: "#FFF" },
  selectedDateNum: { color: "#FFF" },

  /* Task List */
  dateHeader: { fontSize: 18, fontWeight: "bold", marginVertical: 10, color: "#333" },

  /* Timeline */
  taskContainer: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  timelineContainer: { alignItems: "center", width: 20 },
  circle: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#3A86FF", marginBottom: 5 },
  line: { width: 2, height: 40, backgroundColor: "#3A86FF" },

  /* Task Card */
  taskCard: { flexDirection: "row", alignItems: "center", padding: 15,margin:10, borderRadius: 10, flex: 1,borderLeftWidth:5 },
  taskImage: { width: 36, height: 36, borderRadius: 18, marginRight: 10 },
  taskTitle: { fontSize: 16, fontWeight: "bold", color: "#333" },
  taskTeacher: { fontSize: 14, color: "#555" },
  taskTime: { fontSize: 14, color: "#777", marginTop: 15 },
  taskEndTime:{ textAlign:'right', fontSize: 10, color: "#777", marginVertical: 5 },
  noTasksText:{alignItems:'flex-start'}
});

export default TimeTable;

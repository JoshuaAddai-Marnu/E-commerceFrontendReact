//
//  ContentView.swift
//  Demo TBD
//
//  Created by Joshua Addai-Marnu on 08/02/2024.
//

import SwiftUI
struct Task: Identifiable {
    let id = UUID().uuidString
    let title : String
}
struct ContentView: View {
    @Environment(\.scenePhase) var scenePhase
    let task1 = Task(title: "Go for run")
    let task2 = Task(title: "Walk")
    @State var tasks: [Task] = []
    @State var newTask: String = ""
    var body: some View {
        VStack {
            List {
                ForEach(tasks) {task in
                    Text(task.title)
                    Text(task.id)
                }
            }// End List
            
            HStack {
                Text("Enter new task: ")
                TextField("Enter details", text: $newTask)
                
                
            }
            .frame(width: 350, height: 75)
            .border(Color.black, width: 1)
            Button("Add Task") {
                //   tasks.append(task1)
                //  tasks.append(task2)
                tasks.append(Task(title: newTask))
                newTask = ""
            }
            .disabled(newTask.isEmpty)
            
            Image(systemName: "globe")
                .imageScale(.large)
                .foregroundStyle(.tint)
            Text("Hello, world!")
        }
        .padding()
        .onChange(of: scenePhase){ scenePhase in
            switch(scenePhase){
                
            case .background:
                print("app state is background")
            case .inactive:
                print("app state is background")
            case .active:
                print("app state is background")
            @unknown default:
                print("app state is background")
            }
            
        }
    }
    
    func saveTasks(){
        
    }
    func loadTasks(){
        
    }
}

#Preview {
    ContentView()
}

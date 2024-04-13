//
//  onEditEventView.swift
//  Lecture3Demo
//
//  Created by girish lukka on 06/10/2023.
//

import SwiftUI

struct onEditEventView: View {
    @State private var username = ""
        @State private var password = ""
        @State private var isEditingUsername = false
        @State private var isEditingPassword = false
    var body: some View {
            NavigationView {
                Form {
                    Section {
                        TextField("Username", text: $username, onEditingChanged: { editing in
                            isEditingUsername = editing
                        })
                        .overlay(
                            RoundedRectangle(cornerRadius: 8)
                                .stroke(Color.blue, lineWidth: isEditingUsername ? 2 : 0)
                        )
                        .autocorrectionDisabled()
                        
                        TextField("Password", text: $password, onEditingChanged: { editing in
                            isEditingPassword = editing
                        })
                        .overlay(
                            RoundedRectangle(cornerRadius: 8)
                                .stroke(Color.blue, lineWidth: isEditingPassword ? 2 : 0)
                        )
                        
                    }
                    
                    Section {
                        Button(action: {
                            // Perform login logic here
                            print("Logging in with Username: \(username), Password: \(password)")
                        }) {
                            Text("Log In")
                        }
                        
                    }
                }
                .navigationTitle("Login Form")
            }
        }
    }

struct onEditEventView_Previews: PreviewProvider {
    static var previews: some View {
        onEditEventView()
    }
}

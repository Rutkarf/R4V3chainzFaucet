import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  from: string;
  text: string;
  time: string;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  tabs = ['Global', 'Team', 'Privé'];
  activeTab = 0;

  messages: Message[][] = [
    [
      { from: 'NeonFox', text: 'Bienvenue sur le chat global !', time: '21:00' },
      { from: 'SysBot', text: 'Nouveau message non lu', time: '21:01' }
    ],
    [
      { from: 'CyberWolf', text: 'Go Team R4V3 !', time: '21:01' }
    ],
    [
      { from: 'Moi', text: 'Salut, tu es dispo ?', time: '21:02' }
    ]
  ];

  newMessage = '';

  switchTab(i: number) {
    this.activeTab = i;
    this.newMessage = '';
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;
    
    const now = new Date();
    this.messages[this.activeTab].push({
      from: 'Moi',
      text: this.newMessage,
      time: `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`
    });
    
    this.newMessage = '';
    setTimeout(() => this.scrollToBottom(), 10);
  }

  private scrollToBottom() {
    const chatWindow = document.querySelector('.chat-messages');
    if (chatWindow) chatWindow.scrollTop = chatWindow.scrollHeight;
  }
}

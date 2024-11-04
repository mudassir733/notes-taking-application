import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

if (!process.contextIsolated) {
  throw new Error("Error contextIsolated is must be enabled")
}


try {
  // Expose the electron API to the renderer process
  contextBridge.exposeInMainWorld('context', {
    electronAPI: electronAPI,
    // Add more APIs here if needed
  })
} catch (error) {
  console.error('Failed to expose electron API to the renderer process', error)
}
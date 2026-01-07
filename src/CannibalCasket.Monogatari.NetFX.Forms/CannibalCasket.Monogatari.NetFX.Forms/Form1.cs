using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CannibalCasket.Monogatari.NetFX.Forms
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            InitializeWebView();

            KeyUp += Form1_KeyUp;
        }

        private void Form1_KeyUp(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.F11)
            {
                SwitchFullscreen();
                return;
            }

            if (e.KeyCode == Keys.Enter && e.Alt)
            {
                SwitchFullscreen();
                return;
            }
        }

        private void SwitchFullscreen()
        {
            if (this.WindowState == FormWindowState.Normal)
            {
                this.FormBorderStyle = FormBorderStyle.None;
                this.SizeGripStyle = SizeGripStyle.Hide;
                this.WindowState = FormWindowState.Maximized;
            }
            else
            {
                this.WindowState = FormWindowState.Normal;
                this.FormBorderStyle = FormBorderStyle.Sizable;
                this.SizeGripStyle = SizeGripStyle.Show;
            }
        }

        private async void InitializeWebView()
        {
            try
            {
                await webView21.EnsureCoreWebView2Async(null);

                //webView21.WebMessageReceived += WebView21_WebMessageReceived;

                //await webView21.CoreWebView2.CallDevToolsProtocolMethodAsync("Log.enable", "{}");
                //var logEventReceiver = webView21.CoreWebView2.GetDevToolsProtocolEventReceiver("Log.entryAdded");
                //logEventReceiver.DevToolsProtocolEventReceived += LogEventReceiver_DevToolsProtocolEventReceived;


                string appPath = AppDomain.CurrentDomain.BaseDirectory;
                string htmlPath = Path.Combine(appPath, "wwwroot\\index.html");
                webView21.Source = new Uri(htmlPath);

                webView21.KeyUp += WebView21_KeyUp;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
        }

        private void WebView21_KeyUp(object sender, KeyEventArgs e)
        {
            this.Form1_KeyUp(sender, e);
        }
    }
}

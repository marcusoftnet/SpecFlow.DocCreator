using System.Text;

namespace SpecFlowDocCreator.Services
{
    public class JsonFormatter
    {
        readonly StringWalker _walker;
        readonly IndentWriter _writer = new IndentWriter();
        readonly StringBuilder _currentLine = new StringBuilder();
        bool _quoted;

        public JsonFormatter(string json)
        {
            _walker = new StringWalker(json);
            ResetLine();
        }

        private void ResetLine()
        {
            _currentLine.Length = 0;
        }

        public string Format()
        {
            while (MoveNextChar())
            {
                if (_quoted == false && IsOpenBracket())
                {
                    WriteCurrentLine();
                    AddCharToLine();
                    WriteCurrentLine();
                    _writer.Indent();
                }
                else if (_quoted == false && IsCloseBracket())
                {
                    WriteCurrentLine();
                    _writer.UnIndent();
                    AddCharToLine();
                }
                else if (_quoted == false && IsColon())
                {
                    AddCharToLine();
                    WriteCurrentLine();
                }
                else
                {
                    AddCharToLine();
                }
            }
            WriteCurrentLine();
            return _writer.ToString();
        }

        private bool MoveNextChar()
        {
            var success = _walker.MoveNext();
            if (IsApostrophe())
            {
                _quoted = !_quoted;
            }
            return success;
        }

        private bool IsApostrophe()
        {
            return _walker.CharAtIndex() == '"';
        }

        private bool IsOpenBracket()
        {
            return _walker.CharAtIndex() == '{'
                   || _walker.CharAtIndex() == '[';
        }

        private bool IsCloseBracket()
        {
            return _walker.CharAtIndex() == '}'
                   || _walker.CharAtIndex() == ']';
        }

        private bool IsColon()
        {
            return _walker.CharAtIndex() == ',';
        }

        private void AddCharToLine()
        {
            _currentLine.Append(_walker.CharAtIndex());
        }

        private void WriteCurrentLine()
        {
            var line = _currentLine.ToString().Trim();
            if (line.Length > 0)
            {
                _writer.WriteLine(line);
            }
            ResetLine();
        }


        private class IndentWriter
        {
            readonly StringBuilder _sb = new StringBuilder();
            int _indent;

            public void Indent()
            {
                _indent++;
            }

            public void UnIndent()
            {
                if (_indent > 0)
                    _indent--;
            }

            public void WriteLine(string line)
            {
                _sb.AppendLine(CreateIndent() + line);
            }

            private string CreateIndent()
            {
                var indentString = new StringBuilder();
                for (var i = 0; i < _indent; i++)
                    indentString.Append("    ");
                return indentString.ToString();
            }

            public override string ToString()
            {
                return _sb.ToString();
            }
        };

        private class StringWalker
        {
            readonly string _s;
            private int Index { get; set; }

            public StringWalker(string s)
            {
                _s = s;
                Index = -1;
            }

            public bool MoveNext()
            {
                if (Index == _s.Length - 1)
                    return false;
                Index++;
                return true;
            }

            public char CharAtIndex()
            {
                return _s[Index];
            }
        };
    };
}
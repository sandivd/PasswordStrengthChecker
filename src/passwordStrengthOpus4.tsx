import React, { useState, useEffect } from 'react';

interface StrengthCriteria {
  regex: RegExp;
  text: string;
  met: boolean;
}

interface PasswordStrength {
  score: number;
  level: 'weak' | 'fair' | 'good' | 'strong';
  percentage: number;
  color: string;
}

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState<PasswordStrength>({
    score: 0,
    level: 'weak',
    percentage: 0,
    color: 'bg-red-500'
  });
  const [criteria, setCriteria] = useState<StrengthCriteria[]>([]);

  const evaluatePassword = (pwd: string) => {
    const criteriaList: StrengthCriteria[] = [
      {
        regex: /.{8,}/,
        text: 'At least 8 characters',
        met: false
      },
      {
        regex: /[A-Z]/,
        text: 'Contains uppercase letter',
        met: false
      },
      {
        regex: /[a-z]/,
        text: 'Contains lowercase letter',
        met: false
      },
      {
        regex: /[0-9]/,
        text: 'Contains number',
        met: false
      },
      {
        regex: /[^A-Za-z0-9]/,
        text: 'Contains special character',
        met: false
      }
    ];

    let score = 0;
    criteriaList.forEach(criterion => {
      if (criterion.regex.test(pwd)) {
        criterion.met = true;
        score++;
      }
    });

    // Additional scoring for length
    if (pwd.length >= 12) score += 0.5;
    if (pwd.length >= 16) score += 0.5;

    // Check for common patterns (deduct points)
    const commonPatterns = /^(password|123456|qwerty|abc123|letmein|admin|welcome|monkey|dragon)/i;
    if (commonPatterns.test(pwd)) score = Math.max(0, score - 2);

    // Check for repeated characters
    const hasRepeats = /(.)\1{2,}/.test(pwd);
    if (hasRepeats) score = Math.max(0, score - 0.5);

    setCriteria(criteriaList);

    // Calculate strength level
    let level: 'weak' | 'fair' | 'good' | 'strong' = 'weak';
    let color = 'bg-red-500';
    let percentage = 0;

    if (score >= 5) {
      level = 'strong';
      color = 'bg-green-500';
      percentage = 100;
    } else if (score >= 4) {
      level = 'good';
      color = 'bg-blue-500';
      percentage = 75;
    } else if (score >= 3) {
      level = 'fair';
      color = 'bg-yellow-500';
      percentage = 50;
    } else if (score > 0) {
      level = 'weak';
      color = 'bg-red-500';
      percentage = 25;
    }

    setStrength({ score, level, percentage, color });
  };

  useEffect(() => {
    evaluatePassword(password);
  }, [password]);

  const getStrengthText = () => {
    switch (strength.level) {
      case 'strong':
        return 'Excellent password!';
      case 'good':
        return 'Good password';
      case 'fair':
        return 'Could be stronger';
      case 'weak':
        return 'Too weak';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Password Strength Checker</h1>
            <p className="text-gray-600">Create a strong password to protect your account</p>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Enter Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Type your password..."
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {password && (
              <>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Strength</span>
                    <span className={`text-sm font-semibold ${
                      strength.level === 'strong' ? 'text-green-600' :
                      strength.level === 'good' ? 'text-blue-600' :
                      strength.level === 'fair' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {getStrengthText()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full ${strength.color} transition-all duration-300 ease-out`}
                      style={{ width: `${strength.percentage}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700 mb-3">Password must contain:</p>
                  {criteria.map((criterion, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        criterion.met ? 'bg-green-100' : 'bg-gray-100'
                      }`}>
                        {criterion.met ? (
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <div className="w-2 h-2 bg-gray-400 rounded-full" />
                        )}
                      </div>
                      <span className={`text-sm ${
                        criterion.met ? 'text-green-700 font-medium' : 'text-gray-500'
                      }`}>
                        {criterion.text}
                      </span>
                    </div>
                  ))}
                </div>

                {strength.level !== 'strong' && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      <span className="font-semibold">Tip:</span> Use a mix of characters and avoid common words or patterns for better security.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
